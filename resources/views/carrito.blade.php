@extends("app")
@section("menu")


@endsection
@section("content")
<div>
    <router-link to="/" class="text-xl text-black mx-3 p-2" active-class="font-bold" exact>
        Streamings
    </router-link>
    <router-link to="/carrito" class="text-xl text-black mx-3 p-2" active-class="font-bold" exact>
        Carrito2
    </router-link>
</div>

@endsection