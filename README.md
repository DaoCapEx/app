
<img src="https://raw.githubusercontent.com/DaoCapEx/app/main/static-assets/logo/logo-svg/11.svg" height="150" />

# DAO Capital Exchange

#### Run self-sovereign global organizations. 

## Running DCX

### Production

```
sudo bash production-install.sh
```

### Development (with docker-compose) 

Please make sure you have Docker and Docker Compose installed. 

Run this in your terminal at the root of this project: 

```
docker-compose -f docker-compose.dev.yaml up
```

#### Development (without docker-compose) 

```
# Run the postgres server, you can also run it locally if you'd like to run this without docker-compose. 
docker-compose up postgres 

# Run the backend. 
cd api
npm install
npm run dev

# Run the web-app
cd web-app
npm install
npm run dev
```

## Contributing

[Pull requests](https://help.github.com/articles/about-pull-requests/) are very welcome!

We'd love to hear your feedback and suggestions in the [issue tracker](https://github.com/DaoCapEx/app/issues).

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
