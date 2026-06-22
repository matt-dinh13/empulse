---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1841421
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 DMS - Update Document to store vehicle insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

call DMS PUT document-attributes method for the document update

Parameters:
documentUuid = get uuid from Document "VEHICLE_INSURANCE",
attributes":

	
- code = "PARTNER",  value = Document.type = VEHICLE_INFORMATION -> INSR_PROVIDER.value
	
- code = "INSURANCE_START_DATE",  value = AbdaOrderRequest.insurance_start_date
	
- code = "INSURANCE_END_DATE",  value = AbdaOrderRequest.insurance_end_date
	
- code = "PARTNER_RESPONSE",  value = AbdaOrderResponse.description
	
- code = "PARTNER_RESPONSE_TIME",    value = current_date_time/timestamp

## 🔗 Connections (3)

- ← Dependency: [[DMS Document API]]
- → Dependency: [[AbdaOrderResponse]]
- → Dependency: [[VEHICLE_INSURANCE]]

## 📊 Appears In (2 diagrams)

- Analysis: SCL After Activation Process
- Logical: ABDA request - data mapping
