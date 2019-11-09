import { Injectable } from '@nestjs/common';
import v1 from "neo4j-driver";
import { config } from '../config/config';

@Injectable()
export class Neo4jService {

    private _driver: v1.Driver;

    get driver() {
        if (this._driver) {
            return this._driver;
        } else {
            this._driver = v1.driver(
                config.neo4j.host,
                v1.auth.basic(config.neo4j.user, config.neo4j.password),
            );
            return this._driver;
        }
    }

    set driver(driver: v1.Driver) {
        this._driver = driver;
    }
}
