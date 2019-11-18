export interface IApplicant {
    id?: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    mobile?: string,
    linkedin?: string,
    cv?: any,
    cvDoc?: any,
    nic?: string,
    referral?: string
    rate?: string
    evaluated?: boolean
}


export class Applicant implements IApplicant {
    constructor(
        public id?: string,
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public mobile?: string,
        public cv?: any,
        public nic?: string,
        public linkedin?: string,
        public referral?: string,
        public evaluated?: boolean,
        public rate?: string,
        public cvDoc?: any
    ) {

    }
}