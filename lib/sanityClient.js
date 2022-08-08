import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "f1rxql21",
    dataset: "production",
    apiVersion: "2021-10-21",
    token: "sk3ZZb6KKrstuXj6PTKBrkI7KoD6o7bcTTqnB5Iwxy5fH5QcUR23IuvCclxCFxBZe7YDRQssqZeoJ7Nwh4hjLFYzCaGBbYsJG98CjFfErx8xLkn81eRpsyCdtDumy2PVrFgBI8hDFvQ1qeZX4ZpDbJ7fJtZjysZIxCdEKG6fTIeLvnILYHr2",
    useCdn: false,
});