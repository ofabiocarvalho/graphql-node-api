import { commentMutations } from './resources/comment/comment.schema';
import { postMultations } from './resources/post/post.schema'
import { userMutations } from './resources/user/user.schema'

const Mutation = `
    type Mutation {
        ${commentMutations}
        ${postMultations}
        ${userMutations}
    }
`;

export {
    Mutation
}