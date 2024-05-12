"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
class Database {
    supabase;
    constructor(url, apiKey) {
        this.supabase = (0, supabase_js_1.createClient)(url, apiKey);
    }
    async getComments() {
        const { data, error } = this.supabase.from('comment').select('*');
        if (error) {
            return null;
        }
        return data;
    }
    async getPlace() {
        const { data, error } = await this.supabase
            .from('place')
            .select('*, rating(*), optionchoices(*)');
        if (error) {
            return null;
        }
        return data;
    }
    async getRating() {
        const { data, error } = await this.supabase.from('rating').select('*');
        if (error) {
            return null;
        }
        return data;
    }
    async getRatingByIdPlace(place_id) {
        const { data, error } = await this.supabase
            .from('rating')
            .select()
            .eq('place_id', place_id);
        console.log(error);
        if (error) {
            return null;
        }
        return data;
    }
    async addNewPlace(new_data) {
        const { data, error } = await this.supabase
            .from('place')
            .insert(new_data)
            .select();
        if (error) {
            return null;
        }
        const { _, _error } = await this.supabase
            .from('rating')
            .insert({ score: 0, number_of_ratings: 0, place_id: data[0].id });
        if (_error) {
            return null;
        }
        return data;
    }
    async updateRating(new_data, place_id) {
        const { data, error } = await this.supabase
            .from('rating')
            .update(new_data)
            .eq('place_id', place_id);
        if (error) {
            return null;
        }
        return data;
    }
    async createUser(new_data) {
        const { data, error } = await this.supabase
            .from('users')
            .insert(new_data)
            .select();
        if (error) {
            return null;
        }
        return data;
    }
    async getUser(email, username) {
        const { data, error } = await this.supabase
            .from('users')
            .select()
            .eq('email', email, "username", username);
        if (error) {
            return null;
        }
        return data;
    }
    async addComment(new_data) {
        const { data, error } = await this.supabase
            .from('comment')
            .insert(new_data)
            .select();
        if (error) {
            return null;
        }
        return data;
    }
}
exports.default = Database;
//# sourceMappingURL=connect.js.map