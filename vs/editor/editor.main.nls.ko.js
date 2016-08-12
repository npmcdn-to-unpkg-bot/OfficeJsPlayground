/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(793ede49d53dba79d39e52205f16321278f5183c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ko",{"vs/base/browser/ui/actionbar/actionbar":["{0}({1})"],"vs/base/browser/ui/aria/aria":["{0}(다시 발생함)"],"vs/base/browser/ui/findinput/findInput":["정규식 사용","단어 단위로","대/소문자 구분","입력"],"vs/base/browser/ui/inputbox/inputBox":["오류: {0}","경고: {0}","정보: {0}"],"vs/base/common/errors":["{0}. 오류 코드: {1}","사용 권한이 거부되었습니다(HTTP {0}).","사용 권한이 거부되었습니다.","{0}(HTTP {1}: {2})","{0}(HTTP {1})","알 수 없는 연결 오류({0})","알 수 없는 연결 오류가 발생했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다.","{0}: {1}","알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.","시스템 오류가 발생했습니다({0}).","알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.","{0}(총 {1}개의 오류)","알 수 없는 오류가 발생했습니다. 자세한 내용은 로그를 참조하세요.","구현 안 됨","잘못된 인수: {0}","잘못된 인수","잘못된 상태: {0}","잘못된 상태","필요한 파일을 로드하지 못했습니다. 인터넷에 연결되지 않았거나 연결된 서버가 오프라인 상태입니다. 브라우저를 새로 고친 후 다시 시도해 보세요.","필요한 파일을 로드하지 못했습니다. 응용 프로그램을 다시 시작하여 다시 시도하세요. 세부 정보: {0}"],"vs/base/common/json":["잘못된 기호","Invalid number format","Property name expected","Value expected","Colon expected","Comma expected","Closing brace expected","Closing bracket expected","파일 끝 필요"],"vs/base/common/keyCodes":["Windows","Ctrl","Shift","Alt","명령","Windows","Ctrl","Shift","Alt","명령","Windows"],"vs/base/common/severity":["오류","경고","정보"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, 선택기","선택기"],"vs/base/parts/quickopen/browser/quickOpenWidget":["빠른 선택기입니다. 결과의 범위를 축소하려면 입력합니다.","빠른 선택기"],"vs/base/parts/tree/browser/treeDefaults":["Collapse"],"vs/editor/browser/standalone/standaloneSchemas":["JSON schema for ASP.NET project.json files","Compilation options that are passed through to Roslyn","The version of the dependency.","The type of the dependency. 'build' dependencies only exist at build time","The dependencies of the application. Each entry specifes the name and the version of a Nuget package.","A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version","The author of the application","List of files to exclude from publish output (kpm bundle).","Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","Commands that are available for this application","Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.","The description of the application","Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).","Target frameworks that will be built, and dependencies that are specific to the configuration.","Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).","Glob pattern to indicate all the files that need to be compiled as resources.","Scripts to execute during the various stages.","Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","The version of the application. Example: 1.2.0.0","Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.","JSON schema for Bower configuration files","Any property starting with _ is valid.","The name of your package.","Help users identify and search for your package with a brief description.","A semantic version number.","The primary acting files necessary to use your package.","SPDX license identifier or path/url to a license.","A list of files for Bower to ignore when installing your package.","Used for search by keyword. Helps make your package easier to discover without people needing to know its name.","A list of people that authored the contents of the package.","URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.","The repository in which the source code can be found.","Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.","Dependencies that are only needed for development of the package, e.g., test framework or building documentation.","Dependency versions to automatically resolve with if conflicts occur between packages.","If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.","Used by grunt-bower-task to specify custom install locations.","The types of modules this package exposes","NPM configuration for this package.","A person who has been involved in creating or maintaining this package","Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.","Any property starting with _ is valid.","The name of the package.","Version must be parseable by node-semver, which is bundled with npm as a dependency.","This helps people discover your package, as it's listed in 'npm search'.","The relative path to the icon of the package.","This helps people discover your package as it's listed in 'npm search'.","The url to the project homepage.","The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.","The url to your project's issue tracker.","The email address to which issues should be reported.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","A list of people who contributed to this package.","A list of people who maintains this package.","The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.","The main field is a module ID that is the primary entry point to your program.","Specify either a single file or an array of filenames to put in place for the man program to find.","If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.","Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.","Put example scripts in here. Someday, it might be exposed in some clever way.","Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.","A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.","Specify the place where your code lives. This is helpful for people who want to contribute.","The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.","A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.","Array of package names that will be bundled when publishing the package.","Array of package names that will be bundled when publishing the package.","If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.","If set to true, then npm will refuse to publish it.","JSON schema for the ASP.NET global configuration files","A list of project folders relative to this file.","A list of source folders relative to this file.","The runtime to use.","The runtime version to use.","The runtime to use, e.g. coreclr","The runtime architecture to use, e.g. x64.","JSON schema for the TypeScript compiler's configuration file","Instructs the TypeScript compiler how to compile .ts files","The character set of the input files","Generates corresponding d.ts files.","Show diagnostic information.","Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","Emit a single file with source maps instead of having a separate file.","Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.","Print names of files part of the compilation.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.","Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)","Do not emit output.","Do not emit outputs if any type checking errors were reported.","Do not generate custom helper functions like __extends in compiled output.","Warn on expressions and declarations with an implied 'any' type.","Do not include the default library file (lib.d.ts).","Do not add triple-slash references or module import targets to the list of compiled files.","Concatenate and emit output to single file.","Redirect output structure to the directory.","Do not erase const enum declarations in generated code.","Do not emit comments to output.","Specifies the root directory of input files. Use to control the output directory structure with --outDir.","Generates corresponding '.map' file.","Specifies the location where debugger should locate TypeScript files instead of source locations.","Suppress noImplicitAny errors for indexing objects lacking index signatures.","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Watch input files.","Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.","Emits meta data.for ES7 decorators.","Supports transpiling single TS files into JS files.","Enables experimental support for ES7 decorators.","Enables experimental support for async functions (requires TypeScript 1.6).","If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","JSON schema for the JavaScript configuration file","Instructs the JavaScript language service how to validate .js files","The character set of the input files","Show diagnostic information.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.","Do not include the default library file (lib.d.ts).","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Enables experimental support for ES7 decorators.","If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","List files and folders that should not be included. This property is not honored when the 'files' property is present."],"vs/editor/common/config/commonEditorConfig":["편집기 구성","글꼴 패밀리를 제어합니다.","글꼴 크기를 제어합니다.","줄 높이를 제어합니다.","줄 번호의 표시 여부를 제어합니다.","문자 모양 여백의 표시 여부를 제어합니다.","세로 눈금자를 표시할 열","단어 관련 탐색 또는 작업을 수행할 때 단어 구분 기호로 사용되는 문자입니다.","탭 한 개에 해당하는 공백 수입니다.","'number'가 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.","Tab 키를 누를 때 공백을 삽입합니다.","'boolean'이 필요합니다. 값 \"auto\"는 `editor.detectIndentation` 설정에 의해 바뀌었습니다.","파일을 열면 파일 콘텐츠를 기반으로 하여 'editor.tabSize'와 'editor.insertSpaces'가 검색됩니다.","선택 항목의 모서리를 둥글게 할지 여부를 제어합니다.","편집기에서 마지막 줄 이후로 스크롤할지 여부를 제어합니다.","편집기에서 몇 개의 문자 이후에 줄을 바꿀지를 제어합니다. 이 값을 0으로 설정하면 뷰포트 너비 줄 바꿈이 설정됩니다(자동 줄바꿈). -1로 설정하면 편집기에서 줄바꿈을 하지 않습니다.","줄 바꿈 행의 들여쓰기를 제어합니다. 'none', 'same' 또는 'indent' 중 하나일 수 있습니다.","마우스 휠 스크롤 이벤트의 `deltaX` 및 `deltaY`에서 사용할 승수","입력하는 동안 빠른 제안을 표시할지 여부를 제어합니다.","빠른 제안을 표시할 지연 시간(밀리초)을 제어합니다.","Enables parameter hints","괄호를 연 다음에 편집기에서 괄호를 자동으로 닫을지 여부를 제어합니다.","입력 후 편집기에서 자동으로 줄의 서식을 지정할지 여부를 제어합니다.","트리거 문자를 입력할 때 제안을 자동으로 표시할지 여부를 제어합니다.","'Tab' 키 외에도 'Enter' 키를 사용한 제안도 허용할지 제어합니다. 새 줄을 삽입하는 행위와 제안을 허용하는 행위 간의 모호함을 없앨 수 있습니다.","편집기에서 선택 항목과 유사한 일치 항목을 강조 표시할지 여부를 제어합니다.","개요 눈금자에서 동일한 위치에 표시될 수 있는 장식 수를 제어합니다.","커서 깜박임 애니메이션을 제어합니다. 허용되는 값은 '깜박임', '표시' 및 '숨김'입니다.","커서 스타일을 제어합니다. 허용되는 값은 '블록' 및 '줄'입니다.","글꼴 합자 사용","커서가 개요 눈금자에서 가려져야 하는지 여부를 제어합니다.","편집기에서 공백 문자를 렌더링할지 여부를 제어합니다.","편집기에서 지원하는 모드에 대한 참조 정보가 표시되는지 여부를 제어합니다.","편집기에서 코드 접기를 사용할지 여부를 제어합니다.","탭 정지 뒤에 공백 삽입 및 삭제","끝에 자동 삽입된 공백 제거","Keep peek editors open even when double clicking their content or when hitting Escape.","diff 편집기에서 diff를 나란히 표시할지 인라인으로 표시할지 여부를 제어합니다.","diff 편집기에서 선행 공백 또는 후행 공백 변경을 diffs로 표시할지 여부를 제어합니다.","Linux 주 클립보드의 지원 여부를 제어합니다."],"vs/editor/common/config/defaultConfig":["편집기 콘텐츠"],"vs/editor/common/controller/cursor":["명령을 실행하는 동안 예기치 않은 예외가 발생했습니다."],"vs/editor/common/model/textModelWithTokens":["입력을 토큰화하는 동안 모드에서 오류가 발생했습니다."],"vs/editor/common/modes/modesRegistry":["일반 텍스트"],"vs/editor/common/modes/supports/suggestSupport":["단어 기반 추천을 사용합니다."],"vs/editor/common/services/bulkEdit":["이러한 파일이 동시에 변경되었습니다. {0}"],"vs/editor/common/services/modeServiceImpl":["언어 선언을 적용합니다.","언어의 ID입니다.","언어에 대한 이름 별칭입니다.","파일 확장이 언어에 연결되어 있습니다.","파일 이름이 언어에 연결되어 있습니다.","파일 이름 GLOB 패턴이 언어에 연결되어 있습니다.","Mime 형식이 언어에 연결되어 있습니다.","언어 파일의 첫 번째 줄과 일치하는 정규식입니다.","언어에 대한 구성 옵션을 포함하는 파일에 대한 상대 경로입니다.","`contributes.{0}`에 대한 빈 값","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.","`{0}` 속성은 생략 가능하며 `string[]` 형식이어야 합니다.","잘못된 `contributes.{0}`입니다. 배열이 필요합니다."],"vs/editor/common/services/modelServiceImpl":['설정 업데이트 필요: `editor.detectIndentation`은 `editor.tabSize`를 바꿈: "auto" 또는 `editor.insertSpaces`: "auto"'],"vs/editor/contrib/accessibility/browser/accessibility":["접근성 도움말 표시","VS Code의 실험적 접근성 옵션을 사용해 주셔서 감사합니다.","상태:","이 편집기에서 Tab 키를 누르면 포커스가 다음 포커스 가능한 요소로 이동합니다. {0}을(를) 눌러서 이 동작을 설정/해제합니다.","이 편집기에서 Tab 키를 누르면 포커스가 다음 포커스 가능한 요소로 이동합니다. {0} 명령은 현재 키 바인딩으로 트리거할 수 없습니다.","이 편집기에서 Tab 키를 누르면 탬 문자가 삽입됩니다. {0}을(를) 눌러서 이 동작을 설정/해제합니다.","이 편집기에서 Tab 키를 누르면 포커스가 다음 포커스 가능한 요소로 이동합니다. {0} 명령은 현재 키 바인딩으로 트리거할 수 없습니다.","이 도구 설명을 해제하고 Esc 키를 눌러서 편집기로 돌아갈 수 있습니다."],"vs/editor/contrib/carretOperations/common/carretOperations":["Move Carret Left","Move Carret Right"],"vs/editor/contrib/clipboard/browser/clipboard":["잘라내기","복사","붙여넣기"],"vs/editor/contrib/comment/common/comment":["줄 주석 설정/해제","줄 주석 추가","줄 주석 제거","블록 주석 설정/해제"],"vs/editor/contrib/contextmenu/browser/contextmenu":["편집기 상황에 맞는 메뉴 표시"],"vs/editor/contrib/defineKeybinding/browser/defineKeybinding":["키 바인딩 정의","원하는 키 조합을 누르고 ENTER 키를 누르세요.","키 바인딩 정의","현재 자판 배열의 경우 다음을 누르세요.","현재 자판 배열에서는 이 키 조합을 생성할 수 없습니다."],"vs/editor/contrib/find/browser/findWidget":["찾기","찾기","이전 검색 결과","다음 검색 결과","선택 항목에서 찾기","닫기","바꾸기","바꾸기","바꾸기","모두 바꾸기","바꾸기 모드 설정/해제","처음 999개의 결과가 강조 표시되지만 모든 찾기 작업은 전체 텍스트에 대해 수행됩니다.","{0}/{1}","결과 없음"],"vs/editor/contrib/find/common/findController":["일치 항목 찾기의 모든 항목 선택","모든 항목 변경","찾기","다음 찾기","이전 찾기","다음 선택 찾기","이전 선택 찾기","바꾸기","다음 일치 항목 찾기로 마지막 선택 항목 이동","다음 일치 항목 찾기에 선택 항목 추가"],"vs/editor/contrib/folding/browser/folding":["펼치기","Unfold Recursively","접기","Fold Recursively","모두 접기","모두 펼치기","수준 1 접기","수준 2 접기","수준 3 접기","수준 4 접기","수준 5 접기"],"vs/editor/contrib/format/common/formatActions":["코드 서식"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – 정의 {0}개","발견된 {0} 정의를 보려면 클릭하세요.","정의 피킹(Peeking)","정의로 이동","측면에서 정의 열기"],"vs/editor/contrib/gotoError/browser/gotoError":["제안 수정:","제안 수정: ","({0}/{1}) [{2}]","({0}/{1})","다음 오류 또는 경고로 이동","이전 오류 또는 경고로 이동"],"vs/editor/contrib/hover/browser/hover":["가리키기 표시"],"vs/editor/contrib/hover/browser/modesContentHover":["로드 중..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["이전 값으로 바꾸기","다음 값으로 바꾸기"],"vs/editor/contrib/indentation/common/indentation":["구성된 탭 크기","현재 파일의 탭 크기 선택","ID를 공백으로 변환","ID를 탭으로 변환","공백을 사용한 들여쓰기","탭을 사용한 들여쓰기","콘텐츠에서 들여쓰기 감지","공백 토글 및 렌더링"],"vs/editor/contrib/linesOperations/common/linesOperations":["줄 삭제","줄을 오름차순 정렬","줄을 내림차순으로 정렬","후행 공백 자르기","줄 아래로 이동","줄 위로 이동","아래에 줄 복사","위에 줄 복사","줄 들여쓰기","줄 내어쓰기","위에 줄 삽입","아래에 줄 삽입"],"vs/editor/contrib/links/browser/links":["Cmd 키를 누르고 클릭하여 링크로 이동","Ctrl 키를 누르고 클릭하여 링크로 이동","잘못된 URI: {0}을(를) 열 수 없습니다.","링크 열기"],"vs/editor/contrib/multicursor/common/multicursor":["위에 커서 추가","아래에 커서 추가","선택한 줄에서 여러 커서 만들기"],"vs/editor/contrib/parameterHints/browser/parameterHints":["매개 변수 힌트 트리거"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, 힌트"],"vs/editor/contrib/quickFix/browser/quickFix":["빠른 수정"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}, 빠른 수정 제안","로드 중...","수정 제안 사항이 없습니다.","빠른 수정","{0}, 수락됨"],"vs/editor/contrib/quickOpen/browser/gotoLine":["줄 {0} 및 열 {1}(으)로 이동","줄 {0}(으)로 이동","이동할 1과 {0} 사이의 줄 번호 입력합니다.","이동할 1과 {0} 사이의 열을 입력합니다.","Go to line {0}","줄 이동...","줄 번호를 입력하고 선택적 콜론과 이동할 열 번호를 입력합니다."],"vs/editor/contrib/quickOpen/browser/gotoLine.contribution":["줄 이동..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","명령 팔레트","실행할 동작의 이름을 입력합니다."],"vs/editor/contrib/quickOpen/browser/quickCommand.contribution":["명령 팔레트"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","기호 이동...","탐색할 식별자의 이름을 입력합니다.","기호({0})","모듈({0})","클래스({0})","인터페이스({0})","메서드({0})","함수({0})","속성({0})","변수({0})","변수({0})","생성자({0})","호출({0})"],"vs/editor/contrib/quickOpen/browser/quickOutline.contribution":["기호 이동..."],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – 참조 {0}개","모든 참조 찾기","참조 표시"],"vs/editor/contrib/referenceSearch/browser/referencesController":["로드 중..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Failed to resolve file.","참조 {0}개","참조 {0}개","no preview available","참조","결과 없음","참조"],"vs/editor/contrib/rename/browser/rename":["기호 이름 바꾸기"],"vs/editor/contrib/rename/browser/renameInputField":["입력 이름을 바꾸세요. 새 이름을 입력한 다음 [Enter] 키를 눌러 커밋하세요."],"vs/editor/contrib/rename/common/rename":["결과가 없습니다."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["대괄호로 이동"],"vs/editor/contrib/smartSelect/common/smartSelect":["선택 확장","선택 축소"],"vs/editor/contrib/suggest/browser/suggest":["제안 항목 트리거"],"vs/editor/contrib/suggest/browser/suggestWidget":["자세히 알아보기...{0}","{0}, 제안, 세부 정보 있음","{0}, 제안","뒤로 이동","로드 중...","제안 항목이 없습니다.","{0}, 수락됨","{0}, 제안, 세부 정보 있음","{0}, 제안"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Tab 키 사용한 포커스 설정 토글"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["보기: 자동 줄 바꿈 설정/해제"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["닫기"],"vs/languages/html/common/html.contribution":["HTML 구성","한 줄당 최대 문자 수입니다(0 = 사용 안 함).","쉼표로 분리된 태그 목록으로, 서식을 다시 지정해서는 안 됩니다. 모든 인라인 태그의 기본값은 'null'로 설정됩니다.","<head> 및 <body> 섹션을 들여쓰기합니다.","요소 앞에 있는 기존 줄 바꿈의 유지 여부입니다. 요소 앞에만 적용되며 태그 안이나 텍스트에는 적용되지 않습니다.","청크 한 개에 유지할 수 있는 최대 줄 바꿈 수입니다. 무제한일 때는 'null'을 사용합니다.","{{#foo}} 및 {{/foo}}를 서식 지정하고 들여쓰기합니다.","줄 바꿈으로 끝납니다.","쉼표로 분리된 태그 목록으로 앞에 줄 바꿈을 추가로 넣어야 합니다. \"head, body, /html\"의 기본값은 'null'로 설정됩니다."],"vs/platform/actions/browser/menuItemActionItem":["{0} ({1})"],"vs/platform/configuration/common/configurationRegistry":["구성 설정을 적용합니다.","설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.","구성 속성에 대한 설명입니다.","설정된 경우 'configuration.type'을 '개체'로 설정해야 합니다.","'configuration.title'은 문자열이어야 합니다.","'configuration.properties'는 개체여야 합니다."],"vs/platform/extensions/common/abstractExtensionService":["확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 알 수 없는 종속성 `{0}`.","확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 종속성 `{0}`이(가) 활성화되지 않았습니다.","확장 `{0}`을(를) 활성화하지 못했습니다. 이유: 종속성 수준이 10개가 넘음(종속성 루프일 가능성이 높음).","확장 `{0}` 활성화 실패: {1}."],"vs/platform/extensions/common/extensionsRegistry":["가져온 확장 설명이 비어 있습니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.","확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","VS Code 갤러리에 사용되는 확장의 표시 이름입니다.","확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.","VS Code 마켓플레이스에 사용되는 배너입니다.","VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.","배너에 사용되는 글꼴의 색상 테마입니다.","VS Code 확장의 게시자입니다.","VS Code 확장에 대한 활성화 이벤트입니다.","다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).","패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.","이 패키지에 표시된 VS Code 확장의 전체 기여입니다."],"vs/platform/jsonschemas/common/jsonContributionRegistry":["스키마를 사용하는 JSON 파일을 설명합니다. 자세한 내용은 json-schema.org를 참조하세요.","스키마에 대해 고유한 식별자입니다.","이 문서를 확인할 비교 대상 스키마 ","요소에 대한 설명이 포함된 제목입니다.","요소의 자세한 설명입니다. 가리킨 항목 메뉴 및 제안에 사용됩니다.","기본값입니다. 제안에서 사용됩니다.","현재 값을 정확하게 나누어야 하는 숫자(즉, 나머지 없음)입니다.","최대 숫자 값입니다. 기본적으로 포괄적입니다.","최대 속성을 배타적으로 설정합니다.","최소 숫자 값입니다. 기본적으로 포괄적입니다.","최소 속성을 배타적으로 설정합니다.","문자열의 최대 길이입니다.","문자열의 최소 길이입니다.","문자열과 일치하는 정규식입니다. 암시적으로 앵커가 지정되지 않습니다.","항목이 배열로 설정된 경우의 배열에만 사용됩니다. 해당 배열이 스키마인 경우 항목 배열에서 항목을 지정한 후 이 스키마에서 항목의 유효성을 검사합니다. false인 경우 추가 항목의 유효성 검사가 실패합니다.","배열에 사용됩니다. 모든 요소의 유효성을 검사할 스키마이거나 첫 번째 스키마에서 첫 번째 요소의 유효성을 검사하고 두 번째 스키마에서 두 번째 요소의 유효성을 검사하는 등의 순서로 각 항목의 유효성을 검사할 스키마 배열일 수 있습니다.","배열 내에 있을 수 있는 최대 항목 수입니다. 포괄적입니다.","배열 내에 있을 수 있는 최소 항목 수입니다. 포괄적입니다.","배열의 모든 항목이 고유해야 하는지의 여부입니다. 기본값은 false입니다.","개체가 가질 수 있는 최대 속성 수입니다. 포괄적입니다.","개체가 가질 수 있는 최소 속성 수입니다. 포괄적입니다.","이 개체에 필요한 모든 속성의 이름을 나열하는 문자열 배열입니다.","스키마 또는 부울 중 하나입니다. 스키마인 경우 'properties' 또는 'patternProperties'와 일치하지 않는 모든 속성의 유효성을 검사하는 데 사용됩니다. false인 경우 둘 중 하나와 일치하지 않는 모든 속성으로 인해 이 스키마가 실패합니다.","유효성 검사에 사용되지 않습니다. $ref가 포함된 인라인을 참조하려는 하위 스키마를 여기에 배치합니다.","각 속성의 스키마에 대한 속성 이름 맵입니다.","속성 일치를 위한 스키마에 대한 속성 이름의 정규식 맵입니다.","속성 이름 배열 또는 스키마에 대한 속성 이름 맵입니다. 속성 이름 배열은 키에 이름이 지정된 속성의 유효성이 개체에 있는 배열의 속성에 따라 결정된다는 것을 의미합니다. 값이 스키마인 경우 키의 속성이 개체에 존재해야 스키마가 개체에 적용됩니다.","유효한 리터럴 값 집합","기본 스키마 유형(숫자, 정수, Null, 배열, 개체, 부울, 문자열) 중 하나의 문자열 또는 해당 유형의 하위 집합을 지정하는 문자열 배열입니다.","값에 대해 필요한 형식을 설명합니다.","모든 스키마가 일치해야 하는 스키마 배열입니다.","최소한 하나의 스키마가 일치해야 하는 스키마 배열입니다.","스키마 배열로, 이러한 스키마 중 하나가 정확하게 일치해야 합니다.","일치하지 않아야 하는 스키마입니다."],"vs/platform/keybinding/browser/keybindingServiceImpl":["사용 가능한 다른 명령:","({0})을(를) 눌렀습니다. 둘째 키는 잠시 기다렸다가 누르세요.","키 조합({0}, {1})은 명령이 아닙니다."],"vs/platform/message/common/message":["닫기","취소"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ko.js.map