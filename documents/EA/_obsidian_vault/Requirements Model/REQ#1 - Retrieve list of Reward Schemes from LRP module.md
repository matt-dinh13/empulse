---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-134 List of LRP schemes (CBL-100)"
domain: "Requirements Model"
element_id: 1270635
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Retrieve list of Reward Schemes from LRP module

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-134 List of LRP schemes (CBL-100)

## 📝 Notes

Currently, loyalty schemes for definition of service of type =  are retrieved from local entity Reward Scheme, which must be manually synchronized.
It is required to retrieve the list directly from LRP by external service.
Local entity Reward Scheme should be removed.

For interface see GetListOfRewardSchemasRequest
https://git.homecredit.net/product/hss-integration/blob/develop/hss-services/hss-lrp/hss-lrp-oxm/src/main/resources/net/homecredit/hss/integration/loyalty/xsd/management/v1/LoyaltyManagement.xsd 

https://git.homecredit.net/product/hss-integration/blob/develop/hss-services/hss-lrp/hss-lrp-api/src/main/java/net.homecredit.hss.integration.lrp.api.management.v1/LoyaltyManagementWebService.java

## 📊 Appears In (1 diagrams)

- Custom: PCG-134 List of LRP schemes (CBL-100)
