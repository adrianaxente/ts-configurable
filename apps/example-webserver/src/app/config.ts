import { Configurable, BaseConfig } from '@ts-configurable';

@Configurable()
export class ServerConfig extends BaseConfig<ServerConfig> {
  /** Host */
  host = '0.0.0.0';

  /** Port */
  port = 3000;

  /** Protocol */
  protocol: 'http' | 'https' = 'http';

  /** Complete URL */
  get url() {
    return `${this.protocol}://${this.host}:${this.port}`;
  }
}
