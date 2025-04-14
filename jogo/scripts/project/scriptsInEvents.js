

const scriptsInEvents = {

	async EventosJogo_Event22_Act1(runtime, localVars)
	{
		let codigos = runtime.globalVars.codigos;
		codigos++;
		runtime.globalVars.codigos = codigos;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
