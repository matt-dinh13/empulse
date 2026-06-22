---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API"
domain: "Requirements Model"
element_id: 1608965
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Extension of the CreatePayhol Request API with generated documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API

## 📝 Notes

This requirement covers step #7 of the proposed business process:

	
- Returning generated document reference for consumer


Proposed solution:
The current process of the Payhol request creation goes via generating defined Supplement documents (UC 13.205 Create contract supplement documents). It means, the Payhol service has to be connected with a Collection tools Supplement type definition.
Standard Service eligibility validations are used. There is a new eligibility check asked: The client eligible to apply for the Payhol only if there are more than X days left to the next installment due date. 
If the Documents are generated and the printout files returned from the Print Server, the current API for Payhol creation returns the printouts to the generated documents. The printout files are uploaded into the Cabinet standard way. The current data source will be updated with a new attribute "Request Origination" (INTERNAL/EXTERNAL) which can be used for special mark (e-sign).
Due to request the Payhol docs to be signed (e-sign) before the Payhol request execution, it is needed to stop processing of the Payhol request here. 
Proposal is to use the current Signature Requirement Type.ALWAYS_REQUIRED value and the Request origination flag indicates if request is sent via API or GUI (INTERNAL/EXTERNAL). The function will be only available if Global Parameter.SignConfirmationRequired is set.
This identifier will be checked for the generated documents before the Payhol execution (see UC 08.358 Create request for payment holiday common) and decide about continuing/interruption of the request processing.
In case the process is interrupted, the system will wait for the document acceptation from an external system (e.g. mobile app) - see REQ #2 - Expose API for document acceptation for Loan Services

The requirement is tagged as CSI-726

## 🔗 Connections (1)

- → Generalization: [[CBL-12839 (CSI-583) Payhol request execution via API]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12839 (CSI-583) Payhol request execution via API
