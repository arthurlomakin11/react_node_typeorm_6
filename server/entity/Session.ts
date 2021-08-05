import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import {User} from "./User";

@Entity('Sessions', {schema: 'dbo'})
export class Session extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varbinary", {length: 1000})
    sessionid: Buffer;

    // relations

    @ManyToOne(() => User, user => user.sessions)
    user: User;
}