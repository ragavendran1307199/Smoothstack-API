interface JwtPayload {
    email: string;
    provider: number;
    exp: number;
    role: string
}

export class JwtHelper {
    private urlBase64Decode(input: string): string {
        const base64 = input.replace(/-/g, '+').replace(/_/g, '/');
        const padding = '='.repeat((4 - base64.length % 4) % 4);
        const decoded = atob(base64 + padding);
        return decodeURIComponent(decoded);
    }

    public decodeToken(token: undefined | string = '' ): JwtPayload {
        if (!token) {
            return { email: '', provider: 0, exp: 0, role:'' };
        }

        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }

        const payload = parts[1];
        const decodedPayload = this.urlBase64Decode(payload);
        const parsedPayload: JwtPayload = JSON.parse(decodedPayload);
        return parsedPayload;
    }
}
