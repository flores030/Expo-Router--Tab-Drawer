import { Tabs } from "expo-router";
import { Link } from "expo-router";

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
    }}
  />
  <Tabs.Screen

name="Home"
options={{

href: null,


}}
/>

    </Tabs>
  );
}