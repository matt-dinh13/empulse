---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/LOYALTY/User Interface"
domain: "Modules"
element_id: 1145685
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Reward Scheme

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/LOYALTY/User Interface

## 📝 Notes

LDM: SERVICE.LoyaltyService.RewardSchema
List of available Reward Schemes (Code + Name) - retrieved from external module (LRP) by LoyaltyManagementWS.getListOfRewardSchemas (only active items).
If external module does not respond then message MSG_LRP_NotAvailable is displayed and UC ends.
Localization Code: SER_LOYALTY_RewardScheme

## 🔗 Connections (2)

- → Dependency: [[{DEL}Reward Scheme]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Set Loyalty Service properties
