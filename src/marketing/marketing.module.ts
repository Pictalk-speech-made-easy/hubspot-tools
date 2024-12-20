import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { KeycloakService } from "./keycloak.service";
import { MarketingController } from "./marketing.controller";
import { KeycloakOdooService } from "./odoo.service";
import { Module } from "@nestjs/common";
import { SubscriptionModule } from "src/subscription/subscription.module";
import { CacheModule } from "@nestjs/cache-manager";

@Module({
  imports: [CacheModule.register(), ConfigModule.forRoot(), ScheduleModule.forRoot(), SubscriptionModule],
  controllers: [MarketingController],
  providers: [KeycloakService, KeycloakOdooService],
  exports: [ KeycloakService],
})
export class MarketingModule {}
