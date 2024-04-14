import * as vscode from 'vscode';
import { Utils as UriResolve } from 'vscode-uri'; 
export function activate(context: vscode.ExtensionContext) {
	
	const extFolder = vscode.commands.registerCommand('vscode-paths.openExtensionsFolder', () => {
			vscode.commands.executeCommand('revealFileInOS',
				context.extension.extensionUri)
			.then((_)=>{},(err)=>{
				vscode.window.showErrorMessage(`${err}`)
			})
	});

	const installFolder = vscode.commands.registerCommand('vscode-paths.openInstallationFolder', () => {
			vscode.commands.executeCommand('revealFileInOS',
				UriResolve.dirname(vscode.Uri.file(vscode.env.appRoot)))
			.then((_)=>{},(err)=>{
				vscode.window.showErrorMessage(`${err}`)
			})
	});

	context.subscriptions.push(extFolder,installFolder);
}

export function deactivate() {}
