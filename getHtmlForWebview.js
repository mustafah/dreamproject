
function getHtmlForWebview(
    webview: vscode.Webview
  ): string {
    const llmPanelScriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "llm.panel.wvjs")
    );
    const stylesLLMUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "llm.css")
    );
    const stylesLLM2Uri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "llm2.css")
    );
    const stylesLLMLoadingUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "llm-loading.css")
    );

    const contextScriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri,
        "media",
        "contextjs",
        "context.min.js"
      )
    );

    const sendGifUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "send4.svg")
    );

    const markdownScriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "markdown.min.js")
    );

    const jqueryScriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "jquery-3.7.1.min.js")
    );

    const stylesContextUri = webview.asWebviewUri(
      vscode.Uri.joinPath(
        this._extensionUri,
        "media",
        "contextjs",
        "skins",
        "hackerman.css"
      )
    );

    const uniqueString = new Date().getTime();
    // Append unique string to each image path

    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Dreamscript Images</title>
                <link href="${stylesLLMUri}" rel="stylesheet">
                <link href="${stylesLLM2Uri}" rel="stylesheet">
                <link href="${stylesLLMLoadingUri}" rel="stylesheet">
            </head>
            <body>
                <div class="llm-container">

                
                <div class="conversation">

                    ${Globals.currentConversation
                      .map((message) => message.RenderHTML()
                      ) 
                      .join("")}
                    
                    <div class="new"></div>
                    <div class="end"></div>
                </div>

                <div id="llm-input-container">
                  <div id="chat-input" style="height: 39px">
                      <div id="chat-input-before" class="fadeable in"></div>
                      <div id="plus-sign"></div>
                      <textarea class="fadeable in" id="query" placeholder="" oninput="auto_grow(this)" style="height: 38px"></textarea>
                      <div class="fadeable loadingAnimation loadingio-eclipse" style="opacity: 0">
                        <div class="ldio-rpinwye8j0b">
                          <div>
                          </div>
                        </div>
                      </div>
                      <div class="fadeable in send-icon" style="mask-image: url(${sendGifUri});"></div>
                      <!--<img src="${sendGifUri}" style="style="position: absolute; top: 0; right: 0; width: 30px; height: 30px;"/>-->
                  </div>
                  
                  <div id="attachments">
                    <div id="references-container">
                      
                    </div>
                  </div>
                </div>

                </div>
                <link href="${stylesContextUri}" rel="stylesheet">
                <script src="${contextScriptUri}"></script>
                <script src="${markdownScriptUri}"></script>
                <script src="${jqueryScriptUri}"></script>
                <!---->
                <script src="${llmPanelScriptUri}"></script>
            </body>
            </html>
        `;
  }
}
