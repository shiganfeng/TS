import { A, B } from "./modules/user";

let user = new A.UserClass({
    username: 'sgf',
    password: '123'
})

A.userModal.add(user)

let user1 = new B.UserClass({
    name: 'sgf',
    desc: '编程'
})

B.userModal.add(user1)