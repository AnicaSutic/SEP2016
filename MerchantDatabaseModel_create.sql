-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-11-30 18:47:08.77

-- tables
-- Table: Buyer
CREATE TABLE Buyer (
    Id int  NOT NULL IDENTITY,
    Name varchar(150)  NOT NULL,
    Surname varchar(150)  NOT NULL,
    CONSTRAINT Buyer_pk PRIMARY KEY  (Id)
);

-- Table: Insurance
CREATE TABLE Insurance (
    Id int  NOT NULL IDENTITY(1, 1),
    RiskCategoryId int  NOT NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    Price decimal(20,2)  NOT NULL,
    InsurancePolicyId int  NOT NULL,
    PersonsId int  NOT NULL,
    VehicleId int  NOT NULL,
    ResidentalBuildingId int  NOT NULL,
    CONSTRAINT Insurance_pk PRIMARY KEY  (Id)
);

-- Table: InsurancePolicy
CREATE TABLE InsurancePolicy (
    Id int  NOT NULL IDENTITY(1, 1),
    Price decimal(20,2)  NOT NULL,
    BuyerId int  NOT NULL,
    CONSTRAINT InsurancePolicy_pk PRIMARY KEY  (Id)
);

-- Table: Insurants
CREATE TABLE Insurants (
    Id int  NOT NULL IDENTITY(1, 1),
    CONSTRAINT Insurants_pk PRIMARY KEY  (Id)
);

-- Table: Person
CREATE TABLE Person (
    Id int  NOT NULL IDENTITY(1, 1),
    PersonsId int  NOT NULL,
    Name int  NOT NULL,
    Surname int  NOT NULL,
    IdentificationNumber char(13)  NOT NULL,
    NumberOfPasport char(8)  NOT NULL,
    Address varchar(30)  NOT NULL,
    Telefon char(10)  NOT NULL,
    CONSTRAINT Person_pk PRIMARY KEY  (Id)
);

-- Table: Pricelist
CREATE TABLE Pricelist (
    Id int  NOT NULL IDENTITY(1, 1),
    Description varchar(200)  NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    CONSTRAINT Pricelist_pk PRIMARY KEY  (Id)
);

-- Table: PricelistItem
CREATE TABLE PricelistItem (
    Id int  NOT NULL IDENTITY(1, 1),
    Code char(5)  NOT NULL,
    Price decimal(20,2)  NOT NULL,
    RiskItemId int  NOT NULL,
    PricelistItemsId int  NOT NULL,
    Coefficient decimal(5,2)  NOT NULL,
    StartDate datetime  NOT NULL,
    EndDate datetime  NOT NULL,
    CONSTRAINT PricelistItem_pk PRIMARY KEY  (Id)
);

-- Table: PricelistItems
CREATE TABLE PricelistItems (
    Id int  NOT NULL IDENTITY(1, 1),
    PricelistId int  NOT NULL,
    CONSTRAINT PricelistItems_pk PRIMARY KEY  (Id)
);

-- Table: ResidentalBuilding
CREATE TABLE ResidentalBuilding (
    Id int  NOT NULL IDENTITY(1, 1),
    Address varchar(20)  NOT NULL,
    OwnerName varchar(30)  NOT NULL,
    OwnerSurname varchar(30)  NOT NULL,
    OwnerIdentificationNumber char(13)  NOT NULL,
    CONSTRAINT ResidentalBuilding_pk PRIMARY KEY  (Id)
);

-- Table: Risk
CREATE TABLE Risk (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    InsuranceCategory_Id int  NOT NULL,
    CONSTRAINT Risk_pk PRIMARY KEY  (Id)
);

-- Table: RiskCategory
CREATE TABLE RiskCategory (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    CONSTRAINT RiskCategory_pk PRIMARY KEY  (Id)
);

-- Table: RiskItem
CREATE TABLE RiskItem (
    Id int  NOT NULL IDENTITY(1, 1),
    Name varchar(150)  NOT NULL,
    RiskId int  NOT NULL,
    CONSTRAINT RiskItem_pk PRIMARY KEY  (Id)
);

-- Table: Vehicle
CREATE TABLE Vehicle (
    Id int  NOT NULL IDENTITY(1, 1),
    Brand varchar(20)  NOT NULL,
    Type varchar(20)  NOT NULL,
    YearOfProduction date  NOT NULL,
    LicensePlateNumber varchar(20)  NOT NULL,
    ChassisNumber varchar(20)  NOT NULL,
    OwnerName varchar(20)  NOT NULL,
    OwnerSurname varchar(20)  NOT NULL,
    OwnerIdentificationNumber char(13)  NOT NULL,
    CONSTRAINT Vehicle_pk PRIMARY KEY  (Id)
);

-- foreign keys
-- Reference: InsurancePolicy_Buyer (table: InsurancePolicy)
ALTER TABLE InsurancePolicy ADD CONSTRAINT InsurancePolicy_Buyer
    FOREIGN KEY (BuyerId)
    REFERENCES Buyer (Id);

-- Reference: Insurance_InsuranceCategory (table: Insurance)
ALTER TABLE Insurance ADD CONSTRAINT Insurance_InsuranceCategory
    FOREIGN KEY (RiskCategoryId)
    REFERENCES RiskCategory (Id);

-- Reference: Insurance_InsurancePolicy (table: Insurance)
ALTER TABLE Insurance ADD CONSTRAINT Insurance_InsurancePolicy
    FOREIGN KEY (InsurancePolicyId)
    REFERENCES InsurancePolicy (Id);

-- Reference: Insurance_Persons (table: Insurance)
ALTER TABLE Insurance ADD CONSTRAINT Insurance_Persons
    FOREIGN KEY (PersonsId)
    REFERENCES Insurants (Id);

-- Reference: Insurance_ResidentalBuilding (table: Insurance)
ALTER TABLE Insurance ADD CONSTRAINT Insurance_ResidentalBuilding
    FOREIGN KEY (ResidentalBuildingId)
    REFERENCES ResidentalBuilding (Id);

-- Reference: Insurance_Vehicle (table: Insurance)
ALTER TABLE Insurance ADD CONSTRAINT Insurance_Vehicle
    FOREIGN KEY (VehicleId)
    REFERENCES Vehicle (Id);

-- Reference: Person_Persons (table: Person)
ALTER TABLE Person ADD CONSTRAINT Person_Persons
    FOREIGN KEY (PersonsId)
    REFERENCES Insurants (Id);

-- Reference: PricelistItem_PricelistItems (table: PricelistItem)
ALTER TABLE PricelistItem ADD CONSTRAINT PricelistItem_PricelistItems
    FOREIGN KEY (PricelistItemsId)
    REFERENCES PricelistItems (Id);

-- Reference: PricelistItem_RiskItem (table: PricelistItem)
ALTER TABLE PricelistItem ADD CONSTRAINT PricelistItem_RiskItem
    FOREIGN KEY (RiskItemId)
    REFERENCES RiskItem (Id);

-- Reference: PricelistItems_Pricelist (table: PricelistItems)
ALTER TABLE PricelistItems ADD CONSTRAINT PricelistItems_Pricelist
    FOREIGN KEY (PricelistId)
    REFERENCES Pricelist (Id);

-- Reference: RiskItem_Risk (table: RiskItem)
ALTER TABLE RiskItem ADD CONSTRAINT RiskItem_Risk
    FOREIGN KEY (RiskId)
    REFERENCES Risk (Id);

-- Reference: Risk_InsuranceCategory (table: Risk)
ALTER TABLE Risk ADD CONSTRAINT Risk_InsuranceCategory
    FOREIGN KEY (InsuranceCategory_Id)
    REFERENCES RiskCategory (Id);

-- End of file.

