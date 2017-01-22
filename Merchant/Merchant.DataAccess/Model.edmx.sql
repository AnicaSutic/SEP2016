
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 01/22/2017 20:04:05
-- Generated from EDMX file: E:\Faks\Master\sep\new\git\git\Merchant\Merchant.DataAccess\Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [MerchantDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_InsurancePolicy_Buyer]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[InsurancePolicy] DROP CONSTRAINT [FK_InsurancePolicy_Buyer];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_InsuranceCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_InsuranceCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_InsurancePolicy]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_InsurancePolicy];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_Persons]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_Persons];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_ResidentalBuilding]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_ResidentalBuilding];
GO
IF OBJECT_ID(N'[dbo].[FK_Insurance_Vehicle]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Insurance] DROP CONSTRAINT [FK_Insurance_Vehicle];
GO
IF OBJECT_ID(N'[dbo].[FK_Person_Persons]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Person] DROP CONSTRAINT [FK_Person_Persons];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItems_Pricelist]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItems] DROP CONSTRAINT [FK_PricelistItems_Pricelist];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItem_PricelistItems]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItem] DROP CONSTRAINT [FK_PricelistItem_PricelistItems];
GO
IF OBJECT_ID(N'[dbo].[FK_PricelistItem_RiskItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PricelistItem] DROP CONSTRAINT [FK_PricelistItem_RiskItem];
GO
IF OBJECT_ID(N'[dbo].[FK_Risk_InsuranceCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Risk] DROP CONSTRAINT [FK_Risk_InsuranceCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_RiskItem_Risk]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[RiskItem] DROP CONSTRAINT [FK_RiskItem_Risk];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Buyer]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Buyer];
GO
IF OBJECT_ID(N'[dbo].[Insurance]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Insurance];
GO
IF OBJECT_ID(N'[dbo].[InsurancePolicy]', 'U') IS NOT NULL
    DROP TABLE [dbo].[InsurancePolicy];
GO
IF OBJECT_ID(N'[dbo].[Insurants]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Insurants];
GO
IF OBJECT_ID(N'[dbo].[Person]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Person];
GO
IF OBJECT_ID(N'[dbo].[Pricelist]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Pricelist];
GO
IF OBJECT_ID(N'[dbo].[PricelistItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PricelistItem];
GO
IF OBJECT_ID(N'[dbo].[PricelistItems]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PricelistItems];
GO
IF OBJECT_ID(N'[dbo].[ResidentalBuilding]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ResidentalBuilding];
GO
IF OBJECT_ID(N'[dbo].[Risk]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Risk];
GO
IF OBJECT_ID(N'[dbo].[RiskCategory]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RiskCategory];
GO
IF OBJECT_ID(N'[dbo].[RiskItem]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RiskItem];
GO
IF OBJECT_ID(N'[dbo].[sysdiagrams]', 'U') IS NOT NULL
    DROP TABLE [dbo].[sysdiagrams];
GO
IF OBJECT_ID(N'[dbo].[Vehicle]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Vehicle];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Buyer'
CREATE TABLE [dbo].[Buyer] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Surname] varchar(150)  NOT NULL
);
GO

-- Creating table 'Insurance'
CREATE TABLE [dbo].[Insurance] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [RiskCategoryId] int  NOT NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [InsurancePolicyId] int  NOT NULL,
    [InsurantsId] int  NOT NULL,
    [VehicleId] int  NOT NULL,
    [ResidentalBuildingId] int  NOT NULL
);
GO

-- Creating table 'InsurancePolicy'
CREATE TABLE [dbo].[InsurancePolicy] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [BuyerId] int  NOT NULL
);
GO

-- Creating table 'Insurants'
CREATE TABLE [dbo].[Insurants] (
    [Id] int IDENTITY(1,1) NOT NULL
);
GO

-- Creating table 'Person'
CREATE TABLE [dbo].[Person] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [InsurantsId] int  NOT NULL,
    [Name] int  NOT NULL,
    [Surname] int  NOT NULL,
    [IdentificationNumber] char(13)  NOT NULL,
    [PassportNumber] char(8)  NOT NULL,
    [Address] varchar(30)  NOT NULL,
    [TelephoneNumber] varchar(10)  NULL
);
GO

-- Creating table 'Pricelist'
CREATE TABLE [dbo].[Pricelist] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Description] varchar(200)  NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL
);
GO

-- Creating table 'PricelistItem'
CREATE TABLE [dbo].[PricelistItem] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Code] char(5)  NOT NULL,
    [Price] decimal(20,2)  NOT NULL,
    [RiskItemId] int  NOT NULL,
    [PricelistItemsId] int  NOT NULL,
    [Coefficient] decimal(5,2)  NOT NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL
);
GO

-- Creating table 'PricelistItems'
CREATE TABLE [dbo].[PricelistItems] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PricelistId] int  NOT NULL
);
GO

-- Creating table 'ResidentalBuilding'
CREATE TABLE [dbo].[ResidentalBuilding] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Address] varchar(20)  NOT NULL,
    [OwnerName] varchar(30)  NOT NULL,
    [OwnerSurname] varchar(30)  NOT NULL,
    [OwnerIdentificationNumber] char(13)  NOT NULL
);
GO

-- Creating table 'Risk'
CREATE TABLE [dbo].[Risk] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL,
    [RiskCategoryId] int  NOT NULL
);
GO

-- Creating table 'RiskCategory'
CREATE TABLE [dbo].[RiskCategory] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL
);
GO

-- Creating table 'RiskItem'
CREATE TABLE [dbo].[RiskItem] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(150)  NOT NULL,
    [Name_Srb] varchar(150)  NOT NULL,
    [RiskId] int  NOT NULL
);
GO

-- Creating table 'sysdiagrams'
CREATE TABLE [dbo].[sysdiagrams] (
    [name] nvarchar(128)  NOT NULL,
    [principal_id] int  NOT NULL,
    [diagram_id] int IDENTITY(1,1) NOT NULL,
    [version] int  NULL,
    [definition] varbinary(max)  NULL
);
GO

-- Creating table 'Vehicle'
CREATE TABLE [dbo].[Vehicle] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Brand] varchar(20)  NOT NULL,
    [Type] varchar(20)  NOT NULL,
    [YearOfProduction] datetime  NOT NULL,
    [LicensePlateNumber] varchar(20)  NOT NULL,
    [ChassisNumber] varchar(20)  NOT NULL,
    [OwnerName] varchar(20)  NOT NULL,
    [OwnerSurname] varchar(20)  NOT NULL,
    [OwnerIdentificationNumber] char(13)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Buyer'
ALTER TABLE [dbo].[Buyer]
ADD CONSTRAINT [PK_Buyer]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [PK_Insurance]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'InsurancePolicy'
ALTER TABLE [dbo].[InsurancePolicy]
ADD CONSTRAINT [PK_InsurancePolicy]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Insurants'
ALTER TABLE [dbo].[Insurants]
ADD CONSTRAINT [PK_Insurants]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Person'
ALTER TABLE [dbo].[Person]
ADD CONSTRAINT [PK_Person]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Pricelist'
ALTER TABLE [dbo].[Pricelist]
ADD CONSTRAINT [PK_Pricelist]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [PK_PricelistItem]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PricelistItems'
ALTER TABLE [dbo].[PricelistItems]
ADD CONSTRAINT [PK_PricelistItems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ResidentalBuilding'
ALTER TABLE [dbo].[ResidentalBuilding]
ADD CONSTRAINT [PK_ResidentalBuilding]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Risk'
ALTER TABLE [dbo].[Risk]
ADD CONSTRAINT [PK_Risk]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RiskCategory'
ALTER TABLE [dbo].[RiskCategory]
ADD CONSTRAINT [PK_RiskCategory]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RiskItem'
ALTER TABLE [dbo].[RiskItem]
ADD CONSTRAINT [PK_RiskItem]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [diagram_id] in table 'sysdiagrams'
ALTER TABLE [dbo].[sysdiagrams]
ADD CONSTRAINT [PK_sysdiagrams]
    PRIMARY KEY CLUSTERED ([diagram_id] ASC);
GO

-- Creating primary key on [Id] in table 'Vehicle'
ALTER TABLE [dbo].[Vehicle]
ADD CONSTRAINT [PK_Vehicle]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [BuyerId] in table 'InsurancePolicy'
ALTER TABLE [dbo].[InsurancePolicy]
ADD CONSTRAINT [FK_InsurancePolicy_Buyer]
    FOREIGN KEY ([BuyerId])
    REFERENCES [dbo].[Buyer]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_InsurancePolicy_Buyer'
CREATE INDEX [IX_FK_InsurancePolicy_Buyer]
ON [dbo].[InsurancePolicy]
    ([BuyerId]);
GO

-- Creating foreign key on [RiskCategoryId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_InsuranceCategory]
    FOREIGN KEY ([RiskCategoryId])
    REFERENCES [dbo].[RiskCategory]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_InsuranceCategory'
CREATE INDEX [IX_FK_Insurance_InsuranceCategory]
ON [dbo].[Insurance]
    ([RiskCategoryId]);
GO

-- Creating foreign key on [InsurancePolicyId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_InsurancePolicy]
    FOREIGN KEY ([InsurancePolicyId])
    REFERENCES [dbo].[InsurancePolicy]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_InsurancePolicy'
CREATE INDEX [IX_FK_Insurance_InsurancePolicy]
ON [dbo].[Insurance]
    ([InsurancePolicyId]);
GO

-- Creating foreign key on [InsurantsId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_Persons]
    FOREIGN KEY ([InsurantsId])
    REFERENCES [dbo].[Insurants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_Persons'
CREATE INDEX [IX_FK_Insurance_Persons]
ON [dbo].[Insurance]
    ([InsurantsId]);
GO

-- Creating foreign key on [ResidentalBuildingId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_ResidentalBuilding]
    FOREIGN KEY ([ResidentalBuildingId])
    REFERENCES [dbo].[ResidentalBuilding]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_ResidentalBuilding'
CREATE INDEX [IX_FK_Insurance_ResidentalBuilding]
ON [dbo].[Insurance]
    ([ResidentalBuildingId]);
GO

-- Creating foreign key on [VehicleId] in table 'Insurance'
ALTER TABLE [dbo].[Insurance]
ADD CONSTRAINT [FK_Insurance_Vehicle]
    FOREIGN KEY ([VehicleId])
    REFERENCES [dbo].[Vehicle]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Insurance_Vehicle'
CREATE INDEX [IX_FK_Insurance_Vehicle]
ON [dbo].[Insurance]
    ([VehicleId]);
GO

-- Creating foreign key on [InsurantsId] in table 'Person'
ALTER TABLE [dbo].[Person]
ADD CONSTRAINT [FK_Person_Persons]
    FOREIGN KEY ([InsurantsId])
    REFERENCES [dbo].[Insurants]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Person_Persons'
CREATE INDEX [IX_FK_Person_Persons]
ON [dbo].[Person]
    ([InsurantsId]);
GO

-- Creating foreign key on [PricelistId] in table 'PricelistItems'
ALTER TABLE [dbo].[PricelistItems]
ADD CONSTRAINT [FK_PricelistItems_Pricelist]
    FOREIGN KEY ([PricelistId])
    REFERENCES [dbo].[Pricelist]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItems_Pricelist'
CREATE INDEX [IX_FK_PricelistItems_Pricelist]
ON [dbo].[PricelistItems]
    ([PricelistId]);
GO

-- Creating foreign key on [PricelistItemsId] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [FK_PricelistItem_PricelistItems]
    FOREIGN KEY ([PricelistItemsId])
    REFERENCES [dbo].[PricelistItems]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItem_PricelistItems'
CREATE INDEX [IX_FK_PricelistItem_PricelistItems]
ON [dbo].[PricelistItem]
    ([PricelistItemsId]);
GO

-- Creating foreign key on [RiskItemId] in table 'PricelistItem'
ALTER TABLE [dbo].[PricelistItem]
ADD CONSTRAINT [FK_PricelistItem_RiskItem]
    FOREIGN KEY ([RiskItemId])
    REFERENCES [dbo].[RiskItem]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PricelistItem_RiskItem'
CREATE INDEX [IX_FK_PricelistItem_RiskItem]
ON [dbo].[PricelistItem]
    ([RiskItemId]);
GO

-- Creating foreign key on [RiskCategoryId] in table 'Risk'
ALTER TABLE [dbo].[Risk]
ADD CONSTRAINT [FK_Risk_InsuranceCategory]
    FOREIGN KEY ([RiskCategoryId])
    REFERENCES [dbo].[RiskCategory]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Risk_InsuranceCategory'
CREATE INDEX [IX_FK_Risk_InsuranceCategory]
ON [dbo].[Risk]
    ([RiskCategoryId]);
GO

-- Creating foreign key on [RiskId] in table 'RiskItem'
ALTER TABLE [dbo].[RiskItem]
ADD CONSTRAINT [FK_RiskItem_Risk]
    FOREIGN KEY ([RiskId])
    REFERENCES [dbo].[Risk]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_RiskItem_Risk'
CREATE INDEX [IX_FK_RiskItem_Risk]
ON [dbo].[RiskItem]
    ([RiskId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------