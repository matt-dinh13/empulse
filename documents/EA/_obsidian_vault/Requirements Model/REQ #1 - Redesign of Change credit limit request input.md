---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-8448 (CSI-29) Automated CLIP process for VN country"
domain: "Requirements Model"
element_id: 1553619
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Redesign of Change credit limit request input

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-8448 (CSI-29) Automated CLIP process for VN country

## 📝 Notes

Goal of this task is redesign of the current Credit limit change function for receiving bulk request via messaging (source of the requests will be OfferStore).
The current single request via web service (source is a Mobile app), used by KZ business, will be replaced above mentioned messaging in the future.

Processing notices of the request:

	
- LAP approval expected for CLIP only (current function, driven by Supplement setting)
	
- Calling Cabus AM will be the same/unchanged
	
- a new notification for Offer Store and PST about result of CLIP/CLDP/RCLDP processing 

 

Expected impact on the system:

	
- receiving bulk requests for credit limit change from OFS (KAFKA technology)
	
- sending notification about credit limit change results into OFS + PST due to update limits (KAFKA messaging)
	
- LAP requirement: set request header element <priority> = 3 and request initial vector fullpath <approvalPriority> = 2

## 🔗 Connections (1)

- → Generalization: [[REQ description]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-8448 (CSI-29) Automated CLIP process for VN country
