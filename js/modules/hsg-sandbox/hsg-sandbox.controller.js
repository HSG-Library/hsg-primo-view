export class hsgSandboxController {
	isSandbox() {
		const sandboxView = "41SLSP_HSG:sandbox_jfu"
		const params = new URLSearchParams(window.location.search)
		if (params.has('vid')) {
			const vid = params.get('vid')
			return vid == sandboxView
		}
		return false
	}
}
