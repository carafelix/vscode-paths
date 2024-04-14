import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	
	const extFolder = vscode.commands.registerCommand('vscode-paths.openExtensionsFolder', () => {
		vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(context.extensionPath));
	});

	const installFolder = vscode.commands.registerCommand('vscode-paths.openInstallationFolder', () => {
		vscode.commands.executeCommand('revealFileInOS', vscode.Uri.file(vscode.env.appRoot));
	});

	context.subscriptions.push(extFolder,installFolder);
}

export function deactivate() {}
