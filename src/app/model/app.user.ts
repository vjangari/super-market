export interface AppUser{
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    isAdmin: boolean;
    createdDate: Date;
}