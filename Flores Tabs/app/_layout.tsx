import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
    
        name="index"
        options={{
   
        href: '/',
        }}
      />
         <Tabs.Screen
    
         name="Sobre"
        options={{

        href: 'sobre',
    }}
  />
        <Tabs.Screen

         name="Cadastro"
         options={{

         href:'cadastro',
         
          // para esconder
    }}
  />
  <Tabs.Screen

name="Home"
options={{

href:'home',


}}
/>

    </Tabs>
  );
}