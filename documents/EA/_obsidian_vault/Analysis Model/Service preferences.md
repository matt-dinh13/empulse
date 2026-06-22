---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823007
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Service preferences

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

List of service types to be used as product calculator search criteria.
 The values are retrieved from Sales Features REST API GET ( https://{environment}/product-catalog/openapi/v1/sales-features/salesroomCode).
Displayed only if at least one service type is to be displayed.

If option Debit card is checked then:
- hide the panel
- for all service type use service preference = NO_PREFERENCE.

Hidden for option Standalone Insurance

Sort Order: ServiceType.OrderInCalculator

Localization: PRD_ServicePreferences

## 🔗 Connections (1)

- → Dependency: [[Service Type Preference]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Type | string |  |
| Preference | Service Type Preference | false |
