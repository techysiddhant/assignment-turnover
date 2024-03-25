export const getSignedEmail = (email: string) => {
	const first = email.split("@");
	const signedEmail = first[0].slice(0, 3) + "***" + "@" + first[1];
	return signedEmail;
};
