---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API"
domain: "Requirements Model"
element_id: 1608967
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-12839 (CSI-583) Payhol request execution via API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12839 (CSI-583) Payhol request execution via API

## 📝 Notes

Task requirements, business process proposal (KZ)

1) Client authorizes to the Mobile app.
2) Mobile app checks if there is special insurance program “Finzaschita” on client’s contract.
3) If “Finzaschita” exists on contract, then Mobile app notifies, that client can apply for the payment holidays.
4) Client requests for payhol in Mobile app.
5) Mobile app creates the new payhol request to BSL via API.
6) BSL checks if the contract is eligible. The client should be allowed to apply for the payhol only if there are more than X days left to the next installment due date. If the contract is eligible, the payhol request is created in BSL.
7) As a response along with other parameters, BSL sends to mobile app the UUID of the generated supplement.
8) Mobile app gets the document via UUID from BSL.
9) Mobile app displays the supplement to the client.
10) If the client agree, he/she signs the document via EDS (electronic-digital signature).
11) Mobile app sends the request to execute the payhol request.
12) BSL executes the request.
13) Mobile app displays the newly generated IS to the client.

## 🔗 Connections (2)

- ← Generalization: [[REQ #2 - Expose API for document acceptation for Loan Services]]
- ← Generalization: [[REQ #1 - Extension of the CreatePayhol Request API with generated documents]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12839 (CSI-583) Payhol request execution via API
