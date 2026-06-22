---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-15437 (CLM-4455) BSL: Add Model Management facility"
domain: "Requirements Model"
element_id: 1826262
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Add Model Management facility 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-15437 (CLM-4455) BSL: Add Model Management facility

## 📝 Notes

Make following adjustments for Tab Commodity on Contract detail:

- Start to display attribute modelCode next to the attribute modelNumber (https://commodity.ph00a1.cz.infra/swagger-ui.html#/Commodity/getCommodities)
- allow editing of attribute modelCode - enumartion for this attribute is based on REST API searchModels with parameters commodityType and manufacturer (if exists) (https://prc.ph00c1.ph.infra/swagger-ui.html#/Models/searchModels)
- user is allowed to update modelCode OR modelNumber (not bot of them)

## 📊 Appears In (1 diagrams)

- Custom: CBL-15437 (CLM-4455) BSL: Add Model Management facility
