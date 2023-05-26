import { Plugin, MarkdownPostProcessor, MarkdownPostProcessorContext, loadMathJax } from 'obsidian';


export default class ObsidianMath extends Plugin {
    public postprocessor: MarkdownPostProcessor = (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
		// get all loaded mathjax elements
		var mathElements = el.getElementsByClassName("math is-loaded");
		for(var i=0;i<mathElements.length; i++){
			// for each mathjax href element add the class "internal-link" to make obsidian hover and stuff work
		   mathElements[i].querySelectorAll("a").forEach(link => link.addClass("internal-link"))
		}
    }

    async onload () {
      console.log('loading mathlinks')
	  await loadMathJax();
	  this.registerMarkdownPostProcessor(this.postprocessor)
    }

    onunload () {
      console.log('unloading mathlinks')
    }
}
