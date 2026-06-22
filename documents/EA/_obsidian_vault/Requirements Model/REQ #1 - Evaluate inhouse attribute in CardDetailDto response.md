---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10628 (CSI-206) [VN NASA] Transfer PIN option in case of replacement is not visible"
domain: "Requirements Model"
element_id: 1608387
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Evaluate inhouse attribute in CardDetailDto response

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10628 (CSI-206) [VN NASA] Transfer PIN option in case of replacement is not visible

## 📝 Notes

NASA project cards are not allowed to transfer PIN in case of the card replacement (renewal).

Proposed solution:

CSM extend CardDetailDto (i.e. CardInfoWs.getCard WS) with a new attribute - inhouse (boolean) - which in case of VN will be TRUE. Based on this information, BSL Card replacement function doesn't show "Transfer PIN" option for user.

Updated CMS API structures: 
https://git.homecredit.net/product/hss-integration/-/tree/develop/hss-services/hss-card/hss-card-oxm/src/main/resources/net/homecredit/hss/integration/card/xsd/cardinfo

Changes related to the requirement: CSI-345

## 📊 Appears In (1 diagrams)

- Custom: CBL-10628 (CSI-206) [VN NASA] Transfer PIN option in case of replacement is not visible
