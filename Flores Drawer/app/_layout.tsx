import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Principal",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela A",
          title: "Bem-vindo Tela A",
        }}
      />
        <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela B",
          title: "Bem-vindo Tela B",
          drawerItemStyle: { height: 0 } 

          // para esconder 
          //para rodar o drawer precisa  no terminal na pasta    npm add @babel/plugin-proposal-export-namespace-from
        }}
      />
    </Drawer>
   
  );
}