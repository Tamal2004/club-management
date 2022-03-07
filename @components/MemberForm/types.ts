interface MemberValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatarUrl: string;
}

type Member = MemberValues & { id: string };

export type { Member, MemberValues };
