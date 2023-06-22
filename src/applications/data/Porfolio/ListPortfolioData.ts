import {Portfolio} from "../../models/Portfolio";
import Technology from "../../models/Technology";

export const portfolios: Portfolio[] = [
    new Portfolio(
        crypto.randomUUID(),
        'https://picsum.photos/id/1/500/300',
        'Recupalet',
        'https://www.project.one.com',
        'This project is dedicated for sales products sales man',
        [
            new Technology('PHP', 'https://php.net'),
            new Technology('Javascript', 'https://javascript.net'),
            new Technology('jQuery', 'https://javascript.net'),
        ]
    ),
    new Portfolio(
        crypto.randomUUID(),
        'https://picsum.photos/id/1/500/300',
        'Myrcosport B2B',
        'https://www.project.one.com',
        'This project is dedicated for sales products sales man This project is dedicated for sales products sales man This project is dedicated for sales products sales man',
        [
            new Technology('PHP', 'https://php.net'),
            new Technology('Javascript', 'https://javascript.net'),
            new Technology('jQuery', 'https://javascript.net'),
        ]
    ),
    new Portfolio(
        crypto.randomUUID(),
        'https://picsum.photos/id/1/500/300',
        'Keeway B2B',
        'https://www.project.one.com',
        'This project is dedicated for sales products sales man This project is dedicated for sales products sales man',
        [
            new Technology('PHP', 'https://php.net'),
            new Technology('Javascript', 'https://javascript.net'),
            new Technology('jQuery', 'https://javascript.net'),
        ]
    ),
    new Portfolio(
        crypto.randomUUID(),
        'https://picsum.photos/id/1/500/300',
        'Morillas Odoo',
        'https://www.project.one.com',
        'This project is dedicated for sales products sales man',
        [
            new Technology('PHP', 'https://php.net'),
            new Technology('Javascript', 'https://javascript.net'),
            new Technology('jQuery', 'https://javascript.net'),
        ]
    ),
    new Portfolio(
        crypto.randomUUID(),
        'https://picsum.photos/id/1/500/300',
        'Recupalet App',
        'https://www.project.one.com',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi atque, blanditiis exercitationem impedit in inventore magni possimus provident quaerat quasi, quidem quo recusandae, vitae voluptate. Id illo iusto porro?',
        [
            new Technology('PHP', 'https://php.net'),
            new Technology('Laravel', 'https://laravel.com'),
            new Technology('Javascript', 'https://javascript.net'),
            new Technology('jQuery', 'https://javascript.net'),
        ]
    ),
]