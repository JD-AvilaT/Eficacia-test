export type MenuName = 
  | 'inicio'
  | 'agenda'
  | 'gestion'
  | 'portafolio'
  | 'perfil'

export interface MenuItemProps {
  name: MenuName;
  selected: boolean;
}