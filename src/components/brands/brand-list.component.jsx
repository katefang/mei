import React from "react";
import MenuLinks from "../menu-links/menu-links.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  listItems: {
    width: "40vw",
    display: "flex",
    flexFlow: "row wrap",
    padding: theme.spacing(1, 0, 1, 1),
    justifyContent: "start",
  },
}));

const BrandList = () => {
  const { listItems } = useStyles();
  return (
    <div className={listItems}>
      <MenuLinks link="/brand/almay" text="Almay" />
      <MenuLinks link="/brand/alva" text="Alva" />
      <MenuLinks link="/brand/anna sui" text="Anna Sui" />
      <MenuLinks link="/brand/annabelle" text="Annabelle" />
      <MenuLinks link="/brand/benefit" text="Benefit" />
      <MenuLinks link="/brand/boosh" text="Boosh" />
      <MenuLinks link="/brand/burts bees" text="Burts Bees" />
      <MenuLinks link="/brand/butter london" text="Butter London" />
      <MenuLinks link="/brand/c'est moi" text="C'est Moi" />
      <MenuLinks link="/brand/cargo cosmetics" text="Cargo Cosmetics" />
      <MenuLinks link="/brand/china glaze" text="China Glaze" />
      <MenuLinks link="/brand/clinique" text="Clinique" />
      <MenuLinks
        link="/brand/coastal classic creation"
        text="coastal classic creation"
      />
      <MenuLinks link="/brand/colour pop" text="Colour Pop" />
      <MenuLinks link="/brand/covergirl" text="Covergirl" />
      <MenuLinks link="/brand/dalish" text="Dalish" />
      <MenuLinks link="/brand/deciem" text="Deciem" />
      <MenuLinks link="/brand/dior" text="Dior" />
      <MenuLinks link="/brand/dr. hauschka" text="Dr. Hauschka" />
      <MenuLinks link="/brand/e.l.f." text="E.L.F." />
      <MenuLinks link="/brand/essie" text="Essie" />
      <MenuLinks link="/brand/fenty" text="Fenty" />
      <MenuLinks link="/brand/glossier" text="Glossier" />
      <MenuLinks link="/brand/green people" text="Green People" />
      <MenuLinks link="/brand/iman" text="Iman" />
      <MenuLinks link="/brand/loreal" text="Loreal" />
      <MenuLinks link="/brand/lotus cosmetics usa" text="Lotus Cosmetics USA" />
      <MenuLinks
        link="/brand/maias Mineral Galaxy"
        text="Maias Mineral Galaxy"
      />
      <MenuLinks link="/brand/marcelle" text="Marcelle" />
      <MenuLinks link="/brand/marienatie" text="Marienatie" />
      <MenuLinks link="/brand/maybelline" text="Maybelline" />
      <MenuLinks link="/brand/milani" text="Milani" />
      <MenuLinks link="/brand/mineral fusion" text="Mineral Fusion" />
      <MenuLinks link="/brand/misa" text="Misa" />
      <MenuLinks link="/brand/mistura" text="Mistura" />
      <MenuLinks link="/brand/moov" text="Moov" />
      <MenuLinks link="/brand/nudus" text="Nudus" />
      <MenuLinks link="/brand/nyx" text="NYX" />
      <MenuLinks link="/brand/orly" text="Orly" />
      <MenuLinks link="/brand/pacifica" text="Pacifica" />
      <MenuLinks link="/brand/penny lane organics" text="Penny Lane Organics" />
      <MenuLinks link="/brand/physicians formula" text="Physicians Formula" />
      <MenuLinks link="/brand/piggy paint" text="Piggy Paint" />
      <MenuLinks link="/brand/pure anada" text="Pure Anada" />
      <MenuLinks link="/brand/rejuva minerals" text="Rejuva Minerals" />
      <MenuLinks link="/brand/revlon" text="Revlon" />
      <MenuLinks
        link="/brand/sally b/s skin yummies"
        text="Sally B's Skin Yummies"
      />
      <MenuLinks link="/brand/salon perfect" text="Salon Perfect" />
      <MenuLinks link="/brand/sante" text="sante" />
      <MenuLinks link="/brand/sinful colours" text="Sinful Colours" />
      <MenuLinks link="/brand/smashbox" text="Smashbox" />
      <MenuLinks link="/brand/stila" text="Stila" />
      <MenuLinks link="/brand/suncoat" text="Suncoat" />
      <MenuLinks link="/brand/w3llpeople" text="W3llPeople" />
      <MenuLinks link="/brand/wet n wild" text="Wet n Wild" />
      <MenuLinks link="/brand/zorah" text="Zorah" />
      <MenuLinks
        link="/brand/zorah biocosemtiques"
        text="Zorah Biocosemtiques"
      />
    </div>
  );
};

export default BrandList;
