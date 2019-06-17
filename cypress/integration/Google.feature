Feature: Google

	Deseo ingresar al buscador de Google, mirar los resultados y ver que sucede

	Scenario: Busqueda de Google
    	Given ingreso a pagina de Google
		When busco "manolo cabeza de huevo" en la barra de búsqueda
		Then se despliegan los resultados
    
    
