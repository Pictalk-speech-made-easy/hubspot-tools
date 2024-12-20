import { Module } from "@nestjs/common";
import { SubscriptionController } from "./subscription.controller";
import { ConfigModule } from "@nestjs/config";
import { SubscriptionOdooService } from "./odoo.service";
import { KeycloakConnectModule } from "nest-keycloak-connect";
import keycloakConfig from "src/config/keycloak.config";
import { CacheModule } from "@nestjs/cache-manager";
import { SharedCacheService } from "./shared.cache.service";

@Module({
    imports: [
        CacheModule.register( { ttl: 86400000, max: 5000 } ),
        ConfigModule.forRoot({ load: [keycloakConfig] }),
        KeycloakConnectModule.register(keycloakConfig()),
    ],
    controllers: [SubscriptionController],
    providers: [SubscriptionOdooService, SharedCacheService],
    exports: [SubscriptionOdooService, SharedCacheService],
  })
  export class SubscriptionModule {}
  