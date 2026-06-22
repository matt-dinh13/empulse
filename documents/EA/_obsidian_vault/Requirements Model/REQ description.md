---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-8448 (CSI-29) Automated CLIP process for VN country"
domain: "Requirements Model"
element_id: 1553620
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ description

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-8448 (CSI-29) Automated CLIP process for VN country

## 📝 Notes

Goal of this task is introducing the Credit limit change for REL contracts in the VN/IN business.
It is expected to support all Credit limit change features, i.e. CLIP, CLDP and RCLDP (rollback CLDP request) for VN business.

Input of Credit limit change requests: For all Credit limit change requests, there will be used receiving bulk request via messaging/XLM file (source of the requests will be OfferStore).
The current single request via web service (source is a Mobile app), used by KZ business, will be replaced above mentioned messaging in the future.

Processing notices of the request:

	
- LAP approval expected for CLIP only (current function, driven by Supplement setting)
	
- Calling Cabus AM will be the same/unchanged
	
- a new notification for Offer Store and PST about result of CLIP/CLDP/RCLDP processing 


Expected impact on CLM:

	
- receiving bulk requests for credit limit change from OFS (KAFKA technology is preferred)
	
- redesign of the current bulk processing of requests
	
- sending notification about credit limit change processing results into OFS + PST due to update limits (KAFKA messaging)
	
- update Supplement definition/Contract Supplement structures (e.g. due to recording Offer Id)

LAP requirement: set request header element <priority> = 3 and request initial vector fullpath <approvalPriority> = 2

## 🔗 Connections (1)

- ← Generalization: [[REQ #1 - Redesign of Change credit limit request input]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-8448 (CSI-29) Automated CLIP process for VN country
