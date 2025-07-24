<?php

namespace Tests\Feature;

use Tests\TestCase;

class HelloWorldTest extends TestCase
{
    /**
     * Test that the Hello World page loads successfully.
     */
    public function test_hello_world_page_loads(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('welcome')
        );
    }

    /**
     * Test that the health check endpoint works.
     */
    public function test_health_check_endpoint(): void
    {
        $response = $this->get('/health-check');

        $response->assertStatus(200);
        $response->assertJson([
            'status' => 'ok'
        ]);
        $response->assertJsonStructure([
            'status',
            'timestamp'
        ]);
    }
}