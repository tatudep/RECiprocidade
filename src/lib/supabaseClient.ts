// Mocked Supabase client (not used while auth is mocked). This avoids bundling
// an external SDK and keeps the codebase stable without environment variables.
export const supabase = {
	auth: {
		async signInWithPassword() {
			return { data: null, error: new Error('Supabase auth is mocked/disabled') } as const;
		},
		async signUp() {
			return { data: null, error: new Error('Supabase auth is mocked/disabled') } as const;
		},
		async signOut() {
			return { error: null } as const;
		},
		async getSession() {
			return { data: { session: null }, error: null } as const;
		},
		onAuthStateChange() {
			return { data: { subscription: { unsubscribe() {} } } } as const;
		},
	},
} as const;
