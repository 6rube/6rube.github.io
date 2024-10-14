---
layout: post
title: "Writing A VSCode Extension"
date: 2024-01-02
category: misc
img: /assets/img/govscode.svg
---

I recently started to explore Go more extensively. Go has some really cool features, and its standard library is a pleasure to use, especially with goroutines. To get more familiar with the language, I began developing a small CLI game. However, I encountered some frustration when Visual Studio Code (VSCode) automatically deleted imports from my main Go file. This happened because I had a standard VSCode extension that removes unused or broken imports.

The challenge arose from my attempt to use multiple files in Go through the module system. For some reason, developing multiple modules locally is not very user-friendly. To make it work, you need to replace a placeholder reference like example.com/myModule in the go.mod file with the following command:

```bash
go mod edit -replace example.com/myModule=../example.com/myModule
```

This approach only works if you have two folders next to each other. It is not valid to import a module that is in the same folder or in a subfolder of the file trying to import it. I found this extra complexity frustrating, which motivated me to create a VSCode extension.

So first up i started to follow [this](https://code.visualstudio.com/api/get-started/your-first-extension) extions guide from MS.

And you pretty much just have to do the following 

1. Install the Requirements Yeoman and VS Code Extension Generator
2. Run ```npx --package yo --package generator-code -- yo code```
3. Fill out the general Info of the Extension.
4. Press F5

 And that's it.
I did not think that it would be so easy to get started, but even the reference is quite nice.
The VSCode API is also super cool to use. If you want to change the text of the currently open file, you can do so by editing the extension.ts or extension.js file and referencing it like this:
```js
let activeEditor = vscode.window.activeTextEditor;
if (!activeEditor) {
    return; // No open text editor
}
activeEditor.edit(editBuilder => {
    // Get the entire document range
    const entireRange = new vscode.Range(
        activeEditor.document.positionAt(0),
        activeEditor.document.positionAt(activeEditor.document.getText().length)
    );
    // Replace the entire text with new content
    editBuilder.replace(entireRange, "Your new text here");
});
```
So, after just 30 minutes, I was able to create an extension that automatically creates local modules for me.
I had never thought it would be so easy. But now I understand why so many people love hacking their text editor.
From now on, I will probably create more extensions since it was that easy.

You can find the Extension here https://github.com/6rube/go-auto-module.