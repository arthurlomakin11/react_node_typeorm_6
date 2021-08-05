import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import {Session} from "./Session";

@Entity('Users', {schema: 'dbo'})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    // relations

    @OneToMany(() => Session, session => session.sessionid, { cascade: true })
    sessions: Array<Session>;
}