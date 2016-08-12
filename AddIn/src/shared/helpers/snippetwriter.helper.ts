import {Snippet} from '../services';
import {Utilities} from './utilities';

export interface ICreateHtmlOptions {
    inlineJsAndCssIntoIframe: boolean,
    includeOfficeInitialize: boolean
}

export class SnippetWriter {
    static createHtml(snippet: Snippet, options: ICreateHtmlOptions): Promise<string> {
        return snippet.js.then(innerJs => {
            var html = [
                '<!DOCTYPE html>',
                '<html>',
                '<head>',
                '    <meta charset="UTF-8" />',
                '    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />',
                '    <title>Running snippet</title>',
                '    <script src="https://npmcdn.com/jquery"></script>',
                snippet.getJsLibaries().map(item => '    <script src="' + item + '"></script>').join("\n"),
                snippet.getCssStylesheets().map((item) => '    <link rel="stylesheet" href="' + item + '" />').join("\n"),
            ];
 
            if (options.inlineJsAndCssIntoIframe) {
                if (!Utilities.isNullOrWhitespace(snippet.css)) {
                    html.push(
                        "    <style>",
                        Utilities.indentAll(snippet.css.trim(), 2),
                        "    </style>"
                    );
                }

                var jsFullString = SnippetWriter.createJs(innerJs, Utilities.isNullOrWhitespace(snippet.html), options);

                html.push("    <script>");
                if (options.inlineJsAndCssIntoIframe) {
                    html.push("        parent.iframeReadyCallback(window);");
                }
                html.push(Utilities.indentAll(jsFullString, 2));
                html.push("    </script>");

            } else {
                html.push(
                    "    <link type='text/css' rel='stylesheet' href='app.css' />",
                    "    <script src='app.js'></script>"
                );
            }

            var htmlBody = Utilities.isNullOrWhitespace(snippet.html) ? 
                '<button id="invoke-action">Invoke action</button>' : snippet.html;

            html.push(
                '</head>',
                '<body>',
                Utilities.indentAll(htmlBody, 1),
                '</body>',
                '</html>'
            );

            return Utilities.stripSpaces(html.join('\n'));
        })
    }

    static createJs(innerJs: string, htmlWasEmpty: boolean, options: ICreateHtmlOptions): string {
        var jsStringArray = [];

        if (options.includeOfficeInitialize) {
            jsStringArray.push('Office.initialize = function (reason) {');
        }

        jsStringArray.push('$(document).ready(function () {');
        
        if (htmlWasEmpty) {
            jsStringArray.push('$("#invoke-action").click(invokeAction);');
        } else {
            jsStringArray.push(innerJs.trim());
        }

        jsStringArray.push('});');

        if (options.includeOfficeInitialize) {
            jsStringArray.push('};');
        }

        if (htmlWasEmpty) {
            jsStringArray.push(
                'function invokeAction() {',
                innerJs.trim(),
                '}'
            );
        }

        var beautify = require('js-beautify').js_beautify;
        
        return Utilities.stripSpaces(beautify(jsStringArray.join("\n")));
    }
}