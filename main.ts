import {normalizePath, Notice, Plugin} from 'obsidian';
import slugify from "./src/slugify";

export default class SlugifyPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'slugify-file-name',
			name: 'Slugify File name',
			checkCallback: (checking: boolean) => {
				const activeFile = this.app.workspace.getActiveFile()
				if (checking) {
					return activeFile != null
				}
				const newPath = normalizePath(`${activeFile.parent.path}/${slugify(activeFile.name)}`)
				this.app.fileManager.renameFile(activeFile, newPath)
				new Notice(`Slugified ${activeFile.path} into ${newPath}`, 3000)
			}
		});
	}
}
