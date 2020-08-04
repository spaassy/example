// example
const portal = {
	protalTarget: './dist/index.html',
	subProject: [{
			projectName: 'subProject',
			host: './',
			target: './distSub/index.html',
			resourcePattern: ['subProjectSub/common.*.chunk.js', 'subProjectSub/main.js']
	}]
}

module.exports = portal