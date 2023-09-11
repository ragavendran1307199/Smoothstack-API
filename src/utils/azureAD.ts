import { PublicClientApplication } from '@azure/msal-browser';
import { AdConfig } from '../configs/adConfig';


const msalInstance = new PublicClientApplication({
  auth:AdConfig
});


export const HandleLogin = async () => {
  try {
    const response = await msalInstance.loginPopup();
    console.log(response); // Here, you can access the access token and other user information
  } catch (error) {
    console.log(error);
  }
};



































// import { PublicClientApplication, AuthenticationResult } from "@azure/msal-browser";
// import { AdConfig } from "../configs/adConfig";

// interface State {
//     error: Error | null | unknown; // You might want to replace this with a more specific error type, like Error
//     isAuthenticated: boolean;
//     user: UserProfile | null | undefined; // Replace "UserProfile" with the actual type of your user data
// }

// interface UserProfile {
//     id: number;
//     name: string;
// }

// export class SsoHelper {
//     private publicClientApplication: PublicClientApplication;
//     private state: State;

//     constructor() {
//         this.state = {
//             error: null,
//             isAuthenticated: false,
//             user: undefined
//         };
//         this.login = this.login.bind(this);
//         this.publicClientApplication = new PublicClientApplication({
//             auth: {
//                 clientId: AdConfig.appId,
//                 redirectUri: AdConfig.redirectUrl,
//                 authority: AdConfig.authority
//             },
//             cache: {
//                 cacheLocation: "sessionStorage",
//                 storeAuthStateInCookie: true
//             }
//         });
//     }

//     async login(): Promise<void> {
//         try {
//             await this.publicClientApplication.
            
//             loginPopup({
//                 scopes: AdConfig.scope,
//                 prompt: "select_account"
//             }).then((response : AuthenticationResult) => {
//                 console.log(response.account)
//                 this.setState({ isAuthenticated: true });
//             });
//         } catch (err:unknown) {
//             console.log(err)
//             this.setState({ isAuthenticated: false, user: undefined, error: err });
//         }
//     }

//     logout(): void {
//         this.publicClientApplication.logoutPopup();
//     }

//     private setState(newState: Partial<State>): void {
//         this.state = { ...this.state, ...newState };
//     }
// }
