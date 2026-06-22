---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API"
domain: "Requirements Model"
element_id: 1608966
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Expose API for document acceptation for Loan Services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API

## 📝 Notes

This requirement covers step #11 of the proposed business process:

	
- If the client agrees, he/she signs the document via EDS (electronic-digital signature).


	
- Mobile app sends the request to execute the Payhol request.


It is supposed, an external application (e.g. mobile app) calls the API for document signature, or rejection
API and its function will ensure:

	
- acceptation (sign)/rejection of documents are to be signed (update the Contract Supplement)
	
- continuing of the process  - in this case Payhol execution for the processed request


In case no acceptation/rejection is sent, the system should cancel the Payhol request after defined time. It can be ensured by the current function (see UC 13.361 Cancel contract supplement automatically). It will be needed to set up timeout for the respective Contract Supplement status (Approved)

The requirement is tagged as CSI-727

## 🔗 Connections (1)

- → Generalization: [[CBL-12839 (CSI-583) Payhol request execution via API]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12839 (CSI-583) Payhol request execution via API
