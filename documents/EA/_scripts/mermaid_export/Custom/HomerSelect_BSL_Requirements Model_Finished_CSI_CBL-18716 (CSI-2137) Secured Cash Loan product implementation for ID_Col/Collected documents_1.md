# Collected documents

```mermaid
graph TD
    el_1723492["Note"]
    TAX_CARD["TAX_CARD"]
    BPKP_Front_page["BPKP_Front page"]
    el_1723483["Note"]
    el_1723497["Note"]
    BPKB_COURIER_photo["BPKB_COURIER_photo"]
    BPKB_COURIER_BPKB_handover_from_courier_receipt["BPKB_COURIER (BPKB handover from courier receipt)"]
    BPKB_OFFICE_photo["BPKB_OFFICE_photo"]
    BPKB_OFFICE_handover_to_city_office["BPKB_OFFICE (handover to city office)"]
    BPKB_CUST_photo["BPKB_CUST_photo"]
    BPKB_CUST_BPKB_handover_receipt["BPKB_CUST (BPKB handover receipt)"]
    BPKB_Back_page["BPKB_Back page"]
    BPKB_Proof_of_Ownership_book["BPKB (Proof of Ownership book)"]
    STNK_Back_page["STNK_Back page"]
    STNK_Front_page["STNK_Front page"]
    Vehicle_photo["Vehicle photo"]
    Collateral_Subject["Collateral Subject"]
    STNK_vehicle_registrationcertificate["STNK (vehicle registrationcertificate)"]
    KTP_Spouse["KTP Spouse"]
    STNK_Back_page -->|unnamed| STNK_vehicle_registrationcertificate
    STNK_Front_page -->|unnamed| STNK_vehicle_registrationcertificate
    Vehicle_photo -->|unnamed| Collateral_Subject
    STNK_vehicle_registrationcertificate -->|unnamed| Collateral_Subject
    BPKP_Front_page -->|unnamed| BPKB_Proof_of_Ownership_book
    el_1723497 -->|unnamed| BPKB_Proof_of_Ownership_book
    BPKB_Back_page -->|unnamed| BPKB_Proof_of_Ownership_book
    BPKB_CUST_photo -->|unnamed| BPKB_CUST_BPKB_handover_receipt
    BPKB_OFFICE_photo -->|unnamed| BPKB_OFFICE_handover_to_city_office
    BPKB_COURIER_photo -->|unnamed| BPKB_COURIER_BPKB_handover_from_courier_receipt
```
