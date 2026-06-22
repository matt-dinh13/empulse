---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ABDA request - data mapping"
domain: "Requirements Model"
element_id: 1841422
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2345 DMS -New Document Types for Vehicle Insurance and Rapindo

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ABDA request - data mapping

## 📝 Notes

Result of Order Insurance and Rapindo result should be stored in DMS, under new documents defined as below.

Document Type of ABDA:

	
- code: VEHICLE_INSURANCE
	
- name: Vehicle Insurance; ID localization: ???

Attribute Type:

	
- PARTNER; Vehicle insurance partner
	
- INSURANCE_START_DATE; Insurance start date
	
- INSURANCE_END_DATE; Insurance start date
	
- PARTNER_RESPONSE; Partner API response
	
- PARTNER_RESPONSE_TIME; Partner response timestamp ??? je to vubec nutne?
	
- ET_ON; Early termination on
	
- PARTNER_REFERENCE_NUMBER; Partner reference number


Document Type of Rapindo:

	
- code: RAPINDO_RESULT
	
- name: Rapindo result

Attribute Type:

	
- code: CLAIM_NUMBER; Claim Certificate number
	
- code: CLAIM_VALIDITY_START; Certificate Effective At
	
- code: CLAIM_VALIDITY_END; Certificate Expire At
	
- code: CLAIM_STATUS; Certificate Status

## 🔗 Connections (2)

- ← Dependency: [[RAPINDO_RESULT]]
- ← Dependency: [[VEHICLE_INSURANCE]]

## 📊 Appears In (2 diagrams)

- Logical: ABDA request - data mapping
- Logical: RAPINDO request mapping
