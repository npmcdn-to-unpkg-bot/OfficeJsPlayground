/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(793ede49d53dba79d39e52205f16321278f5183c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/base/common/worker/workerServer.nls.zh-tw",{"vs/base/common/errors":["{0}。錯誤碼: {1}","權限被拒絕 (HTTP {0})","權限被拒絕","{0} (HTTP {1}: {2})","{0} (HTTP {1})","未知的連接錯誤 ({0})","發生未知的連接錯誤。可能是您已經沒有連線到網際網路，或是您連接的伺服器已離線。","{0}: {1}","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","發生系統錯誤 ({0})","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","{0} (總計 {1} 個錯誤)","發生未知的錯誤。如需詳細資訊，請參閱記錄檔。","未實作","不合法的狀態: {0}","不合法的引數","不合法的狀態: {0}","不合法的狀態","無法載入需要的檔案。可能是您已經沒有連線到網際網路，或是您連接的伺服器已離線。請重新整理瀏覽器，再試一次。","無法載入必要的檔案。請重新啟動該應用程式，然後再試一次。詳細資料: {0}"],"vs/base/common/severity":["錯誤","警告","資訊"],"vs/editor/common/config/defaultConfig":["編輯器內容"],"vs/editor/common/model/textModelWithTokens":["將輸入語彙基元化時，模式失敗。"],"vs/editor/common/modes/modesRegistry":["純文字"],"vs/editor/common/modes/supports/suggestSupport":["啟用字組式建議。"],"vs/editor/common/services/modeServiceImpl":["提供語言宣告。","語言的識別碼。","語言的別名名稱。","與語言相關聯的副檔名。","與語言相關聯的檔案名稱。","與語言相關聯的檔案名稱 Glob 模式。","與語言相關聯的 MIME 類型。","規則運算式，符合語言檔案的第一行。","檔案的相對路徑，其中該檔案包含語言組態選項。","`contributes.{0}` 值為空值","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","屬性 '{0}' 可以省略且必須屬於 `string[]` 類型","`contributes.{0}` 無效。必須是陣列。"],"vs/platform/configuration/common/configurationRegistry":["提供組態設定。","設定的摘要。此標籤將會在設定檔中作為分隔註解使用。","組態屬性的描述。","如果已設定，'configuration.type' 必須設定為物件","'configuration.title' 必須是字串","'configuration.properties' 必須是物件"],"vs/platform/extensions/common/abstractExtensionService":["擴充功能 `{1}` 無法啟動。原因: 未知的相依性 `{0}`。","擴充功能 `{1}` 無法啟動。原因: 相依性 `{0}` 無法啟動。","擴充功能 `{0}` 無法啟動。原因: 相依性超過 10 個層級 (很可能是相依性迴圈)。","啟動擴充功能 `{0}` 失敗: {1}。"],"vs/platform/extensions/common/extensionsRegistry":["得到空白擴充功能描述","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 '{0}' 為強制項目且必須屬於 `object` 類型","屬性 '{0}' 為強制項目且必須屬於 `string` 類型","屬性 `{0}` 可以省略或必須屬於 `string[]` 類型","屬性 `{0}` 可以省略或必須屬於 `string[]` 類型","屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略","屬性 `{0}` 可以省略或必須屬於 `string` 類型","`main` ({0}) 必須包含在擴充功能的資料夾 ({1}) 中。這可能會使擴充功能無法移植。","屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略","VS Code 資源庫中使用的擴充功能顯示名稱。","VS Code 資源庫用來將擴充功能歸類的分類。","用於 VS Code Marketplace 的橫幅。","VS Code Marketplace 頁首的橫幅色彩。","橫幅中使用的字型色彩佈景主題。","VS Code 擴充功能的發行者。","VS Code 擴充功能的啟動事件。","其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。","在封裝作為 VS Code 擴充功能發行前所執行的指令碼。","此封裝所代表的所有 VS Code 擴充功能比重。"],"vs/platform/jsonschemas/common/jsonContributionRegistry":["使用結構描述來描述 JSON 檔案。如需詳細資訊，請參閱 json-schema.org。","結構描述的唯一識別碼。","結構描述，用來驗證此文件","元素的描述性標題","元素的詳細描述。用於暫留功能表和建議。","預設值。供建議使用。","應該會整除目前值的數字 (即沒有餘數)","最大數值，預設為包含。","將最大值屬性設為排除。","最小數值，預設為包含。","將最小值屬性設為排除。","字串的最大長度。","字串的最小長度。","規則運算式，用來比對字串。其未隱含錨定。","用於陣列 (只有在項目設為陣列時)。如果為結構描述，這個結構描述會驗證項目陣列所指定的項目之後的項目。如果為 False，則額外的項目會導致驗證失敗。","用於陣列。可以是用來比對驗證每個元素的結構描述，或是用來依序比對驗證每個項目的結構描述陣列 (第一個結構描述驗證第一個元素，第二個結構描述驗證第二個元素，依此類推)。","可包含在陣列中的最大項目數。包含。","可包含在陣列中的最小項目數。包含。","陣列中的所有項目是否都必須為唯一。預設為 False。","物件可具有的最大屬性數目。包含。","物件可具有的最小屬性數目。包含。","這個字串陣列會列出這個物件所需的所有屬性的名稱。","為結構描述或布林值。若為結構描述，將會用以驗證所有不符合 'properties' 或 'patternProperties' 的屬性。若為 false，則所有不符合這兩項其中之一的屬性，都會導致此結構描述失敗。","不用於驗證。將您要利用 $ref 內嵌參考的子結構描述置於此","每個屬性的屬性名稱對結構描述對應。","屬性名稱的規則運算式對結構描述的對應，用於比對屬性。","屬性名稱對屬性名稱陣列或結構描述的對應。屬性名稱陣列表示索引鍵中的命名屬性若要有效，陣列中的屬性必須出現在物件中。如果值是結構描述，則只有在索引鍵中的屬性存在物件上時才會將結構描述套用到該物件。","有效常值的集合","可以是其中一個基本結構描述類型 (數字、整數、null、陣列、物件、布林值、字串) 的字串，或是指定這些類型子集的字串陣列。","描述此值預期的格式。","結構描述的陣列，必須全部符合。","結構描述的陣列，其中至少一個必須符合。","結構描述的陣列，其中剛好一個必須符合。","不能相符的結構描述。"]});
//# sourceMappingURL=../../../../../min-maps/vs/base/common/worker/workerServer.nls.zh-tw.js.map