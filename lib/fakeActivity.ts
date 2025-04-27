import { faker } from '@faker-js/faker';

const activities = Array.from({ length: 20 }).map(() => ({
    user: faker.person.fullName(),
    avatar: faker.image.avatar(),
    action: faker.helpers.arrayElement([
        "created a pipeline",
        "deployed a data product",
        "updated workspace settings",
        "deleted a job",
        "viewed billing info",
        "updated user permissions",
        "reviewed API logs",
        "paused a running pipeline",
        "configured a new webhook",
        "rotated security keys",
        "enabled two-factor authentication",
        "generated a new access token",
        "archived a deprecated project",
        "merged a pull request",
        "scheduled a backup",
        "uploaded a new dataset",
        "restarted an environment",
        "canceled a deployment",
        "resolved system warnings",
        "initiated disaster recovery plan",
        "adjusted environment variables",
        "rolled back a deployment",
        "reviewed system audit logs",
        "verified account email",
        "optimized database queries",
        "invited a new team member",
        "revoked access permissions",
        "restarted background services",
        "approved a payment transaction"
    ]),
    time: faker.date.recent({ days: 1 }).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
}));

export const fakeActivity = activities;